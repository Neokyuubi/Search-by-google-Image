/// <reference path="chrome.intellisense.js" />

let googleImageSearchUrl = "https://www.google.com/searchbyimage?site=search&sa=X&image_url=";
let contextMenuItem = 
{
  "id":"Search",
  "title":"Search by Google Image",
  "contexts": ["image"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(data) 
{
    if (data.menuItemId == "Search" && data.mediaType == "image")
    {
        chrome.tabs.create({ url: googleImageSearchUrl + data.srcUrl });
    }
});