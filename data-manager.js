"use strict";
import data from "./data.json" with { type: "json" };

const $ = (e) => document.querySelector(e);

const categoryContainer = $("#category-container");
const categoryTemplate = $("#category-template")?.content;

{
  const categorys = new Set(...Array(data.map((d) => d?.category)));
  categorys.delete(null);
  categoryContainer.replaceChildren(
    ...Array.from(["alle", ...categorys]).map((name) => {
      const category = categoryTemplate?.cloneNode(1);
      category.querySelector("#label").innerText = String(name);
      return category;
    }),
  );
}
