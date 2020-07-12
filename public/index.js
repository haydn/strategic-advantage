import "https://unpkg.com/d3";

import { units, actions, links } from "./data.js";

let selectedUnit = null;

const scale = d3.scaleOrdinal(d3.schemeCategory10);

const simulation = d3
  .forceSimulation([...units, ...actions])
  .force(
    "link",
    d3.forceLink(links).id((d) => d.id)
  )
  .force("charge", d3.forceManyBody().strength(-1000).distanceMax(2000))
  .force(
    "center",
    d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2)
  );

const drag = d3
  .drag()
  .on("start", (d) => {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  })
  .on("drag", (d) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  })
  .on("end", (d) => {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  });

const sidebar = d3.create("div").style("position", "absolute").style("top", 0);

const sidebarUnit = sidebar
  .append("ul")
  .style("padding", 0)
  .style("margin", 0)
  .style("display", "grid")
  .style("gap", "4px")
  .selectAll("li")
  .data(units)
  .join("li")
  .style("list-style", "none")
  .style("display", "grid")
  .style("grid-template-columns", "32px auto")
  .style("gap", "4px")
  .style("align-items", "center")
  .on("click", (d) => {
    selectedUnit = d.id;
  });

sidebarUnit
  .append("img")
  .attr("src", (d) => `/icons/${d.icon}`)
  .style("background", "red")
  .style("border-radius", "4px");

sidebarUnit.append("span").text((d) => d.name);

const svg = d3
  .create("svg")
  .style("position", "absolute")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight)
  .attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);

svg
  .append("defs")
  .selectAll("marker")
  .data(
    [...new Set(links.map(({ name }) => name))].map((name) => ({
      name,
      id: name.replace(/\s+/g, "-"),
    }))
  )
  .join("marker")
  .attr("id", (d) => `arrow-${d.id}`)
  .attr("viewBox", "0 0 10 10")
  .attr("refX", 5)
  .attr("refY", 5)
  .attr("markerWidth", 6)
  .attr("markerHeight", 6)
  .attr("orient", "auto-start-reverse")
  .append("path")
  .attr("fill", (d) => scale(d.name))
  .attr("d", "M 0 0 L 10 5 L 0 10 z");

const linkLegend = svg
  .append("g")
  .attr("transform", (d) => `translate(${window.innerWidth - 10},10)`);

const linkKey = linkLegend
  .selectAll("g")
  .data(
    [...new Set(links.map(({ name }) => name))]
      .sort((a, b) => a.localeCompare(b))
      .map((name, index) => ({
        name,
        index,
      }))
  )
  .join("g")
  .attr("transform", (d) => `translate(0,${d.index * (12 + 8)})`);

linkKey
  .append("line")
  .attr("x1", -32)
  .attr("y1", 6)
  .attr("x2", 0)
  .attr("y2", 6)
  .attr("stroke", (d) => scale(d.name))
  .attr("marker-end", (d) => `url(#arrow-${d.name.replace(/\s+/g, "-")})`);

linkKey
  .append("text")
  .text((d) => d.name)
  .attr("text-anchor", "end")
  .attr("y", 12)
  .attr("x", -36);

const link = svg
  .append("g")
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("stroke", (d) => scale(d.name))
  .attr("fill", (d) => scale(d.name))
  .attr("marker-end", (d) => `url(#arrow-${d.name.replace(/\s+/g, "-")})`);

const action = svg
  .append("g")
  .selectAll("g")
  .data(actions)
  .join("g")
  .call(drag);

action
  .append("polygon")
  .attr("points", "-16,-16 8,-16 16,0 8,16 -16,16 -8,0")
  .attr("fill", (d) => "green");

action
  .append("text")
  .text((d) => d.name)
  .attr("text-anchor", "middle")
  .attr("y", 20 + 12)
  .attr("stroke", "white")
  .attr("stroke-width", 3);

action
  .append("text")
  .text((d) => d.name)
  .attr("text-anchor", "middle")
  .attr("y", 20 + 12);

const node = svg.append("g").selectAll("g").data(units).join("g").call(drag);

node
  .append("rect")
  .attr("x", -16)
  .attr("y", -16)
  .attr("rx", 4)
  .attr("ry", 4)
  .attr("width", 32)
  .attr("height", 32)
  .attr("fill", "red");

node
  .append("svg:image")
  .attr("x", -16)
  .attr("y", -16)
  .attr("width", 32)
  .attr("height", 32)
  .attr("xlink:href", (d) => `/icons/${d.icon}`);

node
  .append("text")
  .text((d) => d.name)
  .attr("text-anchor", "middle")
  .attr("y", -20)
  .attr("stroke", "white")
  .attr("stroke-width", 3);

node
  .append("text")
  .text((d) => d.name)
  .attr("text-anchor", "middle")
  .attr("y", -20);

const getXGap = (source, target, gap) =>
  Math.cos(Math.atan2(target.y - source.y, target.x - source.x)) * gap;

const getYGap = (source, target, gap) =>
  Math.sin(Math.atan2(target.y - source.y, target.x - source.x)) * gap;

window.addEventListener("resize", () => {
  svg
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight)
    .attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);
  simulation.force(
    "center",
    d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2)
  );
  simulation.restart();
  linkLegend.attr(
    "transform",
    (d) => `translate(${window.innerWidth - 10},10)`
  );
});

simulation.on("tick", () => {
  link
    .attr("x1", ({ source, target }) => source.x + getXGap(source, target, 30))
    .attr("y1", ({ source, target }) => source.y + getYGap(source, target, 30))
    .attr("x2", ({ source, target }) => target.x - getXGap(source, target, 30))
    .attr("y2", ({ source, target }) => target.y - getYGap(source, target, 30));
  action.attr(
    "transform",
    ({ x, y }) => `translate(${Math.round(x)},${Math.round(y)})`
  );
  node.attr(
    "transform",
    ({ x, y }) => `translate(${Math.round(x)},${Math.round(y)})`
  );
});

document.body.appendChild(svg.node());
document.body.appendChild(sidebar.node());
