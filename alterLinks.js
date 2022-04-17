function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let links = document.getElementsByTagName("a");
let redirectUrls = [
  "https://www.youtube.com/watch?v=AWOyEIuVzzQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.wwe.com/superstars/john-cena",
];
let rickRollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
for (let link of links) {
  link.href = redirectUrls[randomIntFromInterval(0, 2)];
  link.target = "_blank";
  link.rel = "noopener noreferrer";
}
