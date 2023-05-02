import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={
    
  }
  constructor()
  {
    //2d chart configration
    this.chartOptions={
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['MECHANICAL ENGINEERING', 'COMPUTER SCIENCE', 'APPLIED ELECTRONICS', 'ELECETRONICS ENGINEERING', 'ELECTRONICS ENGINEERING', 'ROBOTIC ENGINEERING',
            'INFORMATION TECHNOLOGY', 'MICROBILOGY','DATA ANAYISIS','AI ENGINEERING']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'students avg: {point.y}'
    },
    title: {
        text: ' YEARLY PASSING AVARAGE',
        align: 'center'
    },
    subtitle: {
        text: 'JYOTHI ENGINEERING COLLGAE',
        align: 'center'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]
    }
    //to export chart
    HC_exporting(Highcharts);
  }
}
