import { UIPanel, UIDiv, UIInput } from '../ui.js';
import { MetadataPanel } from './panels/metadata_panel.js';

export class Toolbar {
    
    constructor(reader) {

        const signals = reader.signals;
        const strings = reader.strings;
        
        this.sidebarOpen = false;

        const container = new UIDiv().setId('toolbar');
        
        const start = new UIPanel().setId('start');
        const opener = new UIInput('button').setId('btn-s');
        const openerStr = strings.get('toolbar/opener');
        opener.dom.title = openerStr;
        opener.dom.addEventListener('click', () => {

            this.sidebarOpen = !this.sidebarOpen;
            signals.sidebarOpener.dispatch(this.sidebarOpen);

            if (this.sidebarOpen) {
                opener.addClass('open');
            } else {
                opener.removeClass('open');
            }
        });

        start.add(opener);

        const center = new MetadataPanel(reader);

        const end = new UIPanel().setId('end');
        const upload = new UIInput('file').setId('btn-u');
        const uploadStr = strings.get('toolbar/upload');
        const storage = window.storage;
        upload.dom.title = uploadStr;
        upload.dom.accept = 'application/epub+zip';
        upload.dom.addEventListener('change', function (e) {

            if (e.target.files.length === 0)
                return;

            if (window.FileReader) {

                const fr = new FileReader();
                fr.onload = function (e) {
                    storage.clear();
                    storage.set(e.target.result, () => {
                        reader.unload();
                        reader.content.viewer.clear(); // clear viewer
                        reader.init(e.target.result, { restore: true });
                    });
                };
                fr.readAsArrayBuffer(e.target.files[0]);
                fr.onerror = function (e) {
                    console.error(e);
                };

                if (window.location.href.includes("?bookPath=")) {
                    window.location.href = window.location.origin + window.location.pathname;
                }

            } else {
                alert(strings.get('toolbar/upload/error'));
            }
        }, false);

        end.add(upload);

        const bookmark = new UIInput('button').setId('btn-b');
        const bookmarkStr = strings.get('toolbar/bookmark');
        bookmark.dom.title = bookmarkStr;
        bookmark.dom.addEventListener('click', () => {

            const cfi = reader.rendition.currentLocation().start.cfi;
            signals.bookmarked.dispatch(reader.isBookmarked(cfi) === -1);
        });

        end.add(bookmark);

        if (document.fullscreenEnabled) {
            
            const fullscreen = new UIInput('button').setId('btn-f');
            const fullscreenStr = strings.get('toolbar/fullsceen');
            fullscreen.dom.title = fullscreenStr;
            fullscreen.dom.addEventListener('click', () => {
                
                this.toggleFullScreen();
            });

            document.addEventListener('keydown', (e) => {
            
                if (e.key === 'F11') {
                    e.preventDefault();
                    this.toggleFullScreen();
                }
            }, false);

            document.addEventListener('fullscreenchange', (e) => {

                const w = window.screen.width === e.path[2].innerWidth;
                const h = window.screen.height === e.path[2].innerHeight;
                
                if (w && h) {
                    fullscreen.addClass('resize-small');
                } else {
                    fullscreen.removeClass('resize-small');
                }
            }, false);

            end.add(fullscreen);
        }

        container.add([start, center.panel, end]);
        document.body.appendChild(container.dom);

        //-- signals --//

        signals.relocated.add((location) => {
            
            const cfi = location.start.cfi;

            if (reader.isBookmarked(cfi) === -1) {
                bookmark.removeClass('bookmarked');
            } else {
                bookmark.addClass('bookmarked');
            }
        });

        signals.bookmarked.add((value) => {
            
            if (value) {
                bookmark.addClass('bookmarked');
            } else {
                bookmark.removeClass('bookmarked');
            }
        });
    }

    toggleFullScreen() {
        
        document.activeElement.blur();
        
        if (document.fullscreenElement === null) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
