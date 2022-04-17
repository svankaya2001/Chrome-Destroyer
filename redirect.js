let redirectUrls = [
  "https://www.youtube.com/watch?v=AWOyEIuVzzQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.wwe.com/superstars/john-cena",
];
let rickRollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (redirectUrls.includes(details.url)) {
      return;
    }
    if (details.url.search("youtube") == -1) {
      chrome.extension.getBackgroundPage().console.log(details);
      let searchStart = details.url.search("search");
      let searchEnd = details.url.search("&");
      let searchTerm = details.url.substring(searchStart, searchEnd);
      return { redirectUrl: "https://www.bing.com/" + searchTerm };
    } else {
      return { redirectUrl: rickRollUrl };
    }
  },
  {
    urls: [
      "*://*.google.com/*",
      "*://*.duckduckgo.com/*",
      "*://*.yahoo.com/*",
      "*://*.baidu.com/*",
      "*://*.youtube.com/*",
    ],
    types: ["main_frame", "sub_frame"],
  },
  ["blocking"]
);
