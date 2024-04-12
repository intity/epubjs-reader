export class Strings {

	constructor(reader) {

		this.language = reader.settings.language || "en";
		this.values = {
			en: {
				"toolbar/sidebar": "Sidebar",
				"toolbar/prev": "Previous page",
				"toolbar/next": "Next page",
				"toolbar/openbook": "Open book",
				"toolbar/openbook/error": "Your browser does not support the required features.\nPlease use a modern browser such as Google Chrome, or Mozilla Firefox.",
				"toolbar/bookmark": "Add this page to bookmarks",
				"toolbar/fullscreen": "Fullscreen",

				"sidebar/close": "Close Sidebar",
				"sidebar/contents": "Contents",
				"sidebar/bookmarks": "Bookmarks",
				"sidebar/bookmarks/add": "Add",
				"sidebar/bookmarks/remove": "Remove",
				"sidebar/bookmarks/clear": "Clear",
				"sidebar/annotations": "Annotations",
				"sidebar/annotations/add": "Add",
				"sidebar/annotations/remove": "Remove",
				"sidebar/annotations/clear": "Clear",
				"sidebar/annotations/anchor": "Anchor",
				"sidebar/annotations/cancel": "Cancel",
				"sidebar/search": "Search",
				"sidebar/search/placeholder": "Search",
				"sidebar/settings": "Settings",
				"sidebar/settings/language": "Language",
				"sidebar/settings/fontsize": "Font size (%)",
				"sidebar/settings/layout": "Layout",
				"sidebar/settings/pagination": ["Pagination", "Generate pagination"],
				"sidebar/settings/spread": "Spread",
				"sidebar/settings/spread/minwidth": "Minimum spread width",
				"sidebar/metadata": "Metadata",
				"sidebar/metadata/title": "Title",
				"sidebar/metadata/creator": "Creator",
				"sidebar/metadata/description": "Description",
				"sidebar/metadata/publisher": "Publisher",
				"sidebar/metadata/identifier": "Identifier",
				"sidebar/metadata/language": "Language",
				"sidebar/metadata/pubdate": "Pubdate",
				"sidebar/metadata/modified_date": "Modified date",
				"sidebar/metadata/rights": "Rights",

				"notedlg/label": "Note",
				"notedlg/add": "Add"
			},
			fr: {
				"toolbar/sidebar": "Barre latérale",
				"toolbar/prev": "???",
				"toolbar/next": "???",
				"toolbar/openbook": "Ouvrir un livre local",
				"toolbar/openbook/error": "Votre navigateur ne prend pas en charge les fonctions nécessaires.\nVeuillez utiliser un navigateur moderne tel que Google Chrome ou Mozilla Firefox.",
				"toolbar/bookmark": "Insérer un marque page ici",
				"toolbar/fullscreen": "Plein écran",

				"sidebar/close": "???",
				"sidebar/contents": "Sommaire",
				"sidebar/bookmarks": "Marque-pages",
				"sidebar/bookmarks/add": "Ajouter",
				"sidebar/bookmarks/remove": "Retirer",
				"sidebar/bookmarks/clear": "Tout enlever",
				"sidebar/annotations": "Annotations",
				"sidebar/annotations/add": "Ajouter",
				"sidebar/annotations/remove": "Retirer",
				"sidebar/annotations/clear": "Tout enlever",
				"sidebar/annotations/anchor": "Ancre",
				"sidebar/annotations/cancel": "Annuler",
				"sidebar/search": "Rechercher",
				"sidebar/search/placeholder": "rechercher",
				"sidebar/settings": "Réglages",
				"sidebar/settings/language": "Langue",
				"sidebar/settings/fontsize": "???",
				"sidebar/settings/layout": "???",
				"sidebar/settings/pagination": ["Pagination", "Établir une pagination"],
				"sidebar/settings/spread": "???",
				"sidebar/settings/spread/minwidth": "???",
				"sidebar/metadata": "???",
				"sidebar/metadata/title": "???",
				"sidebar/metadata/creator": "???",
				"sidebar/metadata/description": "???",
				"sidebar/metadata/publisher": "???",
				"sidebar/metadata/identifier": "???",
				"sidebar/metadata/language": "Langue",
				"sidebar/metadata/pubdate": "???",
				"sidebar/metadata/modified_date": "???",
				"sidebar/metadata/rights": "???",

				"notedlg/label": "???",
				"notedlg/add": "Ajouter"
			},
			ja: {
				"toolbar/sidebar": "サイドバー",
				"toolbar/prev": "???",
				"toolbar/next": "???",
				"toolbar/openbook": "本を開く",
				"toolbar/openbook/error": "ご利用のブラウザは必要な機能をサポートしていません。\nGoogle Chrome、Mozilla Firefox、その他のモダンなブラウザでご利用ください。",
				"toolbar/bookmark": "このページに栞を設定する",
				"toolbar/fullscreen": "フルスクリーン",

				"sidebar/close": "???",
				"sidebar/contents": "目次",
				"sidebar/bookmarks": "栞",
				"sidebar/bookmarks/add": "追加",
				"sidebar/bookmarks/remove": "削除",
				"sidebar/bookmarks/clear": "クリア",
				"sidebar/annotations": "注釈",
				"sidebar/annotations/add": "追加",
				"sidebar/bookmarks/remove": "削除",
				"sidebar/annotations/clear": "クリア",
				"sidebar/annotations/anchor": "アンカー",
				"sidebar/annotations/cancel": "キャンセル",
				"sidebar/search": "検索",
				"sidebar/search/placeholder": "検索",
				"sidebar/settings": "設定",
				"sidebar/settings/language": "表示言語",
				"sidebar/settings/fontsize": "???",
				"sidebar/settings/layout": "???",
				"sidebar/settings/pagination": ["ページネーション", "ページネーションを生成します。"],
				"sidebar/settings/spread": "???",
				"sidebar/settings/spread/minwidth": "???",
				"sidebar/metadata": "???",
				"sidebar/metadata/title": "???",
				"sidebar/metadata/creator": "???",
				"sidebar/metadata/description": "???",
				"sidebar/metadata/publisher": "???",
				"sidebar/metadata/identifier": "???",
				"sidebar/metadata/language": "表示言語",
				"sidebar/metadata/pubdate": "???",
				"sidebar/metadata/modified_date": "???",
				"sidebar/metadata/rights": "???",

				"notedlg/label": "???",
				"notedlg/add": "追加"
			},
			ru: {
				"toolbar/sidebar": "Боковая панель",
				"toolbar/prev": "Предыдущая страница",
				"toolbar/next": "Следущая страница",
				"toolbar/openbook": "Открыть книгу",
				"toolbar/openbook/error": "Ваш браузер не поддерживает необходимые функции.\nПожалуйста, используйте современный браузер, такой как Google Chrome или Mozilla Firefox.",
				"toolbar/bookmark": "Добавить эту страницу в закладки",
				"toolbar/fullscreen": "Полноэкранный режим",

				"sidebar/close": "Закрыть боковую панель",
				"sidebar/contents": "Содержание",
				"sidebar/bookmarks": "Закладки",
				"sidebar/bookmarks/add": "Добавить",
				"sidebar/bookmarks/remove": "Удалить",
				"sidebar/bookmarks/clear": "Очистить",
				"sidebar/annotations": "Аннотации",
				"sidebar/annotations/add": "Добавить",
				"sidebar/annotations/remove": "Удалить",
				"sidebar/annotations/clear": "Очистить",
				"sidebar/annotations/anchor": "Метка",
				"sidebar/annotations/cancel": "Отмена",
				"sidebar/search": "Поиск",
				"sidebar/search/placeholder": "Поиск",
				"sidebar/settings": "Настройки",
				"sidebar/settings/language": "Язык",
				"sidebar/settings/fontsize": "Размер шрифта",
				"sidebar/settings/layout": "Макет",
				"sidebar/settings/pagination": ["Нумерация страниц", "Генерировать нумерацию страниц"],
				"sidebar/settings/spread": "Разворот",
				"sidebar/settings/spread/minwidth": "Мин. ширина колонки",
				"sidebar/metadata": "Метаданные",
				"sidebar/metadata/title": "Заголовок",
				"sidebar/metadata/creator": "Автор",
				"sidebar/metadata/description": "Описание",
				"sidebar/metadata/publisher": "Издатель",
				"sidebar/metadata/identifier": "Идентификатор",
				"sidebar/metadata/language": "Язык",
				"sidebar/metadata/pubdate": "Дата публикации",
				"sidebar/metadata/modified_date": "Дата изменения",
				"sidebar/metadata/rights": "Лицензия",

				"notedlg/label": "Заметка",
				"notedlg/add": "Добавить"
			}
		};

		reader.on("languagechanged", (value) => {
			this.language = value;
		});
	}

	get(key) { return this.values[this.language][key] || "???"; }
}