const chromev = document.querySelector(".chrome");
const firefoxv = document.querySelector(".firefox");
const edgev = document.querySelector(".edge");
const operav = document.querySelector(".opera");
const safariv = document.querySelector(".safari");

if (navigator.userAgent.match("Edg/")) {
  edgev.style.opacity = 1;
} else if (navigator.userAgent.match("Firefox/")) {
  firefoxv.style.opacity = 1;
} else if (navigator.userAgent.match("Opera/")) {
  operav.style.opacity = 1;
} else if (navigator.userAgent.match("Chrome/")) {
  chromev.style.opacity = 1;
} else if (navigator.userAgent.match("Safari/")) {
  safariv.style.opacity = 1;
} else {
  console.log("nothig");
}

/////////////////////////////
let arraye = ["ali", "mohi", "ali", "gasem", "zahra", "ali"];

let total = [];
arraye.reduce((pre, cur) => {
  total.push(cur);
  console.log(total);
  return pre + cur;
});
