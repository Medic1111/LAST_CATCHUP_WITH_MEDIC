"use strict";

// QUERIES
const header = document.getElementById("header");
const h1 = document.getElementById("h1");
const p = document.getElementById("p");
const main = document.getElementById("main");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const h2a = document.getElementById("h2a");
const h2b = document.getElementById("h2b");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

// NOTE:
// arrOfNodes resides in another JS file and is
// NOT being exported/imported

// SETTING CLASSES TO ALL ELEMENTS:
const setClass = (el, className) => el.setAttribute("class", className);

const bulkSetClass = (arr) => {
  arr.forEach((obj) => setClass(obj.node, obj.className));
};

// SETTING TEXT TO ALL EMEMENTS
const setTxt = (el, str) => (el.innerText = str);

const bulkSetInnerTxt = (arr) => {
  arr.forEach((obj) => obj.innerTxt && setTxt(obj.node, obj.innerTxt));
};

// SETTING SRC TO ALL IMGs
const setSrc = (el, src) => el.setAttribute("src", src);

const bulkSetInnerSrc = (arr) => {
  arr.forEach((obj) => obj.src && setSrc(obj.node, obj.src));
};

// INITIALIZING - EVENT LISTENER

const appInit = () => {
  bulkSetClass(arrOfNodes);
  bulkSetInnerTxt(arrOfNodes);
  bulkSetInnerSrc(arrOfNodes);
};

window.addEventListener("load", appInit); //research

// const sayOuch = () => {
//   return (h1.innerText = "OUCH");
// };

// h1.addEventListener("click", sayOuch);

// const alertSomthing = () => {
//   alert("Clicking blaaaah");
// };
// window.addEventListener("click", alertSomthing);

// window.addEventListener("scroll", () => {
//   alert("scrolling blaaaah");
// });
