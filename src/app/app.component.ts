import { Component } from '@angular/core';
import {
  ChartEvent,
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
} from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartType: string = 'pie';
  public pieChartPlugins = [DataLabelsPlugin];
  public pieChartColors: any[] = [
    {
      backgroundColor: [
        '#ed7d31',
        '#4375a1',
        '#ffbf00',
        '#afafaf',
        '#70AD46',
        '#5B9CD6',
      ],
    },
  ];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
  };
  public pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log('click', event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log('hover', event, active);
  }
}
