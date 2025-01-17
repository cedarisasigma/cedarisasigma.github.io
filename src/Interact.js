
import { load } from './Loader.js';
import { render } from './Render.js';

let currentGraph = 1;
let currentMode = 'scatter';

window.toggleGraphMode = function(mode) {
    currentMode = mode;
    render(data, currentGraph, currentMode);
};

window.switchGraph = function(graphNumber) {
    currentGraph = graphNumber;
    render(data, currentGraph, currentMode);
};

let data;
let who = document.getElementById('name').textContent;
fetch(`${who}-data.json`)
  .then(response => response.json())
  .then(loadedData => {
    data = loadedData;
    render(data, currentGraph, currentMode);
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });
