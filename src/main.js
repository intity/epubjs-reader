import { Reader } from './reader.js';
import { Storage } from './storage.js';

"use strict";

window.onload = function () {

	const storage = new Storage();
	const path = "https://s3.amazonaws.com/moby-dick/";

	storage.init(function () {

		storage.get(function (data) {

			if (data !== undefined) {

				window.reader = new Reader(data, { restore: true });

			} else {

				window.reader = new Reader(path, { restore: true });
			}
		});
	});

	window.storage = storage;
};