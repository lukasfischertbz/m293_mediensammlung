"use strict";
import data from "./data.json" with { type: "json" };

const $ = (e) => document.querySelector(e);

const mainContainer = $("#main-content-list");
const entryTemplate = $("#main-content-entry")?.content;

mainContainer.replaceChildren(
  ...data.map(({ title, image, release, src }) => {
    const entry = entryTemplate?.cloneNode(1);
    entry.querySelector("#label").innerText = title;
    entry.querySelector("img").src = image;
    entry.querySelector(".entry").dataset.source = src;
    entry.querySelector("#release-date").innerText = release;
    return entry;
  }),
);

const mainGrid = $("main");

window.addEventListener("resize", (e) => {
  mainGrid.style.gridTemplateColumns = `repeat(${mainGrid.getClientRects()[0].width / 500}, auto)`;
});

mainGrid.addEventListener("click", (e) => {
  window.open(e.target.closest(".entry").dataset.source);
});
