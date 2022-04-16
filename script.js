chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    let searchStart = details.url.search("search");
    let searchEnd = details.url.search("&");
    let searchTerm = details.url.substring(searchStart, searchEnd);
    return {redirectUrl: "https://www.bing.com/" + searchTerm};
  },
  {
    urls:["*://*.google.com/*"],
    types: ['main_frame', 'sub_frame'],
  },
  ["blocking"]
);