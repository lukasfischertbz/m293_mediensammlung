"use strict";
import data from "./data.json" with { type: "json" };

const $ = (e) => document.querySelector(e);

const categoryContainer = $(".category-container");
const categoryTemplate = $("#category-template")?.children[0];

{
  const categorys = new Set(...Array(data.map((d) => d?.category)));
  categorys.delete(null);
  Array.from(categorys).map((name) => {
    const category = categoryTemplate?.cloneNode(1);
    category.innerText = name;
    return name;
  });
}
