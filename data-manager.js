"use strict";
import data from "./data.json" with { type: "json" };

const $ = (e) => document.querySelector(e);

const categoryContainer = $("#category-container");
const categoryTemplate = $("#category-template")?.content;

const mainContainer = $("#main-content-list");
const entryTemplate = $("#main-content-entry")?.content;

const categorys = new Set(...Array(data.map((d) => d?.category)));
categorys.delete(null);
categoryContainer.replaceChildren(
  ...Array.from(["alle", ...categorys]).map((name) => {
    const category = categoryTemplate?.cloneNode(1);
    category.querySelector("#label").innerText = String(name);
    return category;
  }),
);

const entrys = data.map((d) => d.contents).flat();
console.log(entrys);
mainContainer.replaceChildren(
  ...entrys.map(({ title, image, length, src }) => {
    const entry = entryTemplate?.cloneNode(1);
    entry.querySelector("#label").innerText = title;
    entry.querySelector("img").src = image;
    entry.querySelector("#length").innerText = length ?? null;
    return entry;
  }),
);
