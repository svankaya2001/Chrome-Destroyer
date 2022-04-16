chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    return {redirectUrl: "https://www.bing.com"};
  },
  {
    urls:["*://*.google.com/*"],
    types: ['main_frame', 'sub_frame'],
  },
  ["blocking"]
);