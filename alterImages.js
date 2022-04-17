cena_imgs = [
  "https://www.wrestlinginc.com/ezoimgfmt/img.youtube.com/vi/Dhxgf3wOIqY/maxresdefault.jpg?v=Dhxgf3wOIqY&ab_channel=WWE&ezimgfmt=rs:804x452/rscb1/ng:webp/ngcb1",
  "https://www.wwe.com/f/styles/wwe_large/public/all/2019/10/RAW_06202016rf_1606--3d3997f53e6f3e9277cd5a67fbd8f31f.jpg",
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function replaceImages() {
  let imgs = document.getElementsByTagName("img");

  for (let img of imgs) {
    img.src = cena_imgs[randomIntFromInterval(0, 1)];
  }
}

chrome.storage.sync.get(
  {
    enabled: true,
    url: cena_imgs[randomIntFromInterval(0, 1)],
  },
  function (items) {
    if (items.enabled) {
      url = items.url;
      let css = document.createElement("style");
      css.innerHTML = 'img { content: url("' + url + '") !important; }';
      document.body.appendChild(css);
      window.setInterval(replaceImages, 3000);
      replaceImages();
    }
  }
);
