Plotly.d3.csv('https://raw.githubusercontent.com/mscfinance-big-data-viz/session-02/master/data/BTC-USD.csv', (err, rows) => {
    
function unpack (rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
}
    var trace = {
        x: unpack(rows,'Date'),
        close: unpack(rows, 'Close'),
        high: unpack(rows, 'High'),
        low: unpack(rows, 'Low'),
        open: unpack(rows, 'Open'),
        
        increasing: {line: {color: 'black'}},
        decreasing: {line: {color: 'red'}},
        
        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'};
    
    var data=[trace];
    
    
    var layout={
        dragmode: 'zoom',
        showlegend: 'false',
        xaxis: {
            autorange: true,
            title: 'Date',
            rangeselector: {
                x: 0,
                y: 1.2,
                xanchor: 'left',
                font: {size: 8},
                buttons: [{
                    step: 'month',
                    stepmode: 'backward',
                    count: 1,
                    label: '1 month'}, 
                          {
                    step: 'month',
                    stepmode: 'backward',
                    count: 6,
                    label: '6 months'}, 
                          {
                    step: 'month',
                    stepmode: 'backward',
                    count: 12,
                    label: '12 months'},
                          {
                    step: 'all',
                    label: 'All dates'}
                          ]
            }
            
        },
        yaxis: {autorange: true}
    };
    
    Plotly.newPlot('myViz', data, layout);
});