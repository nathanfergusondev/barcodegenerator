chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"title": "Generate barcode from selection",
		"contexts": ["selection"],
		"id": "BARCODE_GENERATOR_MENU_ITEM"
	});
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.tabs.create({
		url: "content/barcode.html?data=" + encodeURIComponent(info.selectionText)
	});
});
