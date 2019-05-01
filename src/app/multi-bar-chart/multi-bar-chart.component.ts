import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multi-bar-chart',
  templateUrl: './multi-bar-chart.component.html',
  styleUrls: ['./multi-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MultiBarChartComponent implements OnInit {
  dataSource: any;
  type = 'mscolumn2d';
  width = 600;
  height = 300;
  dataFormat = 'json';
  @Input()
  xaxisdata: string[];
  @Input()
  yaxisdata: {}[];
  constructor() { }

  ngOnInit() {
  
    this.dataSource = {
      chart: {
        caption: 'Internet Speed dashboard',
        placevaluesinside: '1',
        showvalues: '0',
        plottooltext: '<b>$dataValue</b> Speed of $label in $seriesName',
        theme: 'fusion'
      },
      categories: [
        {
          category: this.xaxisdata
        }
      ],
      dataset: this.yaxisdata,
    };
    console.log(this.dataSource);
  }

}
