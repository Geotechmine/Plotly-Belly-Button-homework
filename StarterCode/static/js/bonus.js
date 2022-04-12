// Build Gauge Function
function buildGauge(wfreq) {
    var gauge = d3.select('#gauge');
    gauge.html('');

    var ggData = [{
        domain: {x: [0, 1], y: [0, 1]},
        value: wfreq,
        title: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week',
        type: 'indicator',
        mode: 'gauge+number',
        gauge: {
            axis: {range: [null, 9]},
            steps: [
                {range: [0, 1], color: '#EBF5FB'},
                {range: [1, 2], color: '#D6EAF8'},
                {range: [2, 3], color: '#AED6F1'},
                {range: [3, 4], color: '#85C1E9'},
                {range: [4, 5], color: '#5DADE2'},
                {range: [5, 6], color: '#3498DB'},
                {range: [6, 7], color: '#2E86C1'},
                {range: [7, 8], color: '#2874A6'},
                {range: [8, 9], color: '#21618C'}
            ],
            
            threshold: {
                line: {color: 'red', width: 1},
                thickness: 0.5,
                value: wfreq
                 
            }
        },
        number: {'suffix': "", 'font': {'size': 80}},
    }];

    var theta = 180-(wfreq*20)
    var r = 0.5
    var x_head = r * Math.cos(Math.PI/180*theta)
    var y_head = r * Math.sin(Math.PI/180*theta)

  // Path: may have to change to create a better triangle
 // var mainPath = 'M 0.48 0.25 L 0.5 0.65 L 0.51 0.25',
    //  pathX = String(x_head)+.5,
     // space = ' ',
    //  pathY = String(y_head)+.25,
    //  pathEnd = ' Z';
 // var path = mainPath.concat(pathX,space,pathY,pathEnd);


    var layout = {
        width: 600,
        height: 450,
        margin: {
            t: 0,
            b: 0
        },
        xaxis: {range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false},
        yaxis: {range: [0, 1], showgrid: false, 'zeroline': false, 'visible': false},
        showlegend: false,
        
        
        annotations: [
         {
            ax: 0.5,
            ay: 0.25,
            axref: 'x',
            ayref: 'y',
           x: 0.5+x_head,
           y: 0.25+y_head,
           xref: 'x',
           yref: 'y',
            showarrow: true,
            arrowhead: 9,
           arrowcolor: "red",
           tickwidth: 4,
           text: '# scrub/week',
           font: {'size': 15},
                      
          }
        ],

        //shapes: [
          //  {
           //     type: 'path',
           //     path: path,
            //    fillcolor: '850000',
            //    line: {
             //       width: 1
            //    },

          //  }
       // ]

    };
    Plotly.newPlot('gauge', ggData, layout);
};