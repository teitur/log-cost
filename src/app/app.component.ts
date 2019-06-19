import { Component } from '@angular/core';

import Chart from 'chart.js';

import {GoogleCharts} from 'google-charts';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'log-cost';
  ngOnInit() {
  this.hej();
  }

  hej(): void {
    //Load the charts library with a callback
    GoogleCharts.load(drawChart);
     
    function drawChart() {
        var input1 = [['cost','interest']];
        var input2 = [['cost','interest']];
        var input3 = [['cost','interest']];
        var input4 = [['cost','interest']];
        
        var x0 = 2000.0;
        var myLn = function(x) { return Math.log(x / x0); }
        var myLog2 = function(x) { return Math.log2(x/x0); }
        var myLog10 = function(x) { return Math.log10(x/x0); }
     
        var y0 = 100;
        var x1 = 100000;
        var scaleLn = 3*y0/myLn(x1);
        var scale2 = 3*y0/myLog2(x1);
        var scale10 = 3*y0/myLog10(x1);
        var scale4 = 6*y0/myLog10(x1);

        for(var i=4; i<100; i++) {
          var x = i*500
          input1.push([x,y0 + scaleLn*myLn(x)]);
        }
     
        for(var i=4; i<200; i++) {
          var x = i*500
          input2.push([x,y0 + scale2*(myLog2(x))]);
        }
     
        for(var i=4; i<2000; i++) {
          var x = i*500
          input3.push([x,y0 + scale10*(myLog10(x))]);
        }

        for(var i=4; i<200; i++) {
          var x = i*500
          input4.push([x,y0 + scale4*(myLog10(x))]);
        }
     
        // Standard google charts functionality is available as GoogleCharts.api after load
        const data1 = GoogleCharts.api.visualization.arrayToDataTable(input1);
        const pie_1_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart1'));
        pie_1_chart.draw(data1);

        const data2 = GoogleCharts.api.visualization.arrayToDataTable(input2);
        const pie_2_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart2'));
        pie_2_chart.draw(data2);

        const data3 = GoogleCharts.api.visualization.arrayToDataTable(input3);
        const pie_3_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart3'));
        pie_3_chart.draw(data3);

        const data4 = GoogleCharts.api.visualization.arrayToDataTable(input4);
        const pie_4_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart4'));
        pie_4_chart.draw(data4);


    }
  } 

}
