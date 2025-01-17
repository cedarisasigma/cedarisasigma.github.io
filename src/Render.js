
import { format } from './Format.js';

export function render(data, currentGraph, currentMode) {
    const graphData = data[currentGraph.toString()];
    console.log('Graph data:', graphData);

    if (!graphData) {
        console.error(`Graph data for graph${currentGraph} not found.`);
        return;
    }

    const xMode = graphData.x.mode;
    const yMode = graphData.y.mode;
    const xTitle = graphData.x.title;
    const yTitle = graphData.y.title;

    document.getElementById('author').textContent = `Author: ${graphData.author}`;

    const hoverText = graphData.x.data.map((_, i) => {
        const xFormatted = format(graphData.x.data[i], xMode);
        const yFormatted = format(graphData.y.data[i], yMode);
        return `${xTitle}: ${xFormatted}<br>${yTitle}: ${yFormatted}<extra></extra>`;
    });

    if (currentMode === 'scatter') {
        Plotly.newPlot('scatter-graph', [{
            x: graphData.x.data,
            y: graphData.y.data,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 10 },
            hovertemplate: hoverText
        }], {
            title: graphData.title
        });

        document.getElementById('scatter-graph').classList.remove('hidden');
        document.getElementById('bar-graph').classList.add('hidden');
    } else {
        Plotly.newPlot('bar-graph', [{
            x: graphData.x.data,
            y: graphData.y.data,
            type: 'bar',
            hovertemplate: hoverText,
            width: 0.8
        }], {
            title: graphData.title,
            xaxis: {
                title: graphData.x.title,
                tickmode: 'array',
                tickvals: graphData.x.data,
                tickangle: -45
            },
            yaxis: {
                title: graphData.y.title
            }
        });

        document.getElementById('bar-graph').classList.remove('hidden');
        document.getElementById('scatter-graph').classList.add('hidden');
    }
}
