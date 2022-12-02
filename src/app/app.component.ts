import { Component } from '@angular/core';
import {
  ActiveElement,
  Chart,
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
  public pieChartPlugins2 = [DataLabelsPlugin];
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
    // public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true,
    // radius: '50%',
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold',
        },
      },
    },
    // pieceLabel: { // !Remove
    //   responsive: true,
    //   maintainAspectRatio: true,
    //   render: function (args: any) {
    //     const value = args.value;
    //     return value;
    //   },
    //   fontColor: 'rgb(255,255,255)',
    //   fontStyle: 'bold',
    //   fontFamily: 'Helvetica',
    //   overlap: true
    // },
    onHover: (
      event: ChartEvent,
      arrayElements: ActiveElement[],
      chart: Chart<'pie'>
    ) => {
      if (
        (event.native as any).toElement &&
        (event.native as any).toElement.attributes.style
      ) {
        if (arrayElements[0]) {
          (event.native as any).toElement.attributes.style.nodeValue = (
            event.native as any
          ).toElement.attributes.style.nodeValue.replace(
            'cursor: default;',
            'cursor: pointer;'
          );
          if (
            (event.native as any).toElement.attributes.style.nodeValue.indexOf(
              'cursor: pointer;'
            ) === -1
          ) {
            (event.native as any).toElement.attributes.style.nodeValue +=
              'cursor: pointer;';
          }
        } else {
          (event.native as any).toElement.attributes.style.nodeValue = (
            event.native as any
          ).toElement.attributes.style.nodeValue.replace(
            'cursor: pointer;',
            'cursor: default;'
          );
        }
      }
    },
  };
  public pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  public pieChartDatasets: { data: number[]; backgroundColor: string[] }[] = [
    {
      data: [300, 500, 100, 0, 100],
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
  public pieChartLegend = true;

  public pieChartOptions2 = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    // set dataLabel if you want to show count of data as label inside chart, isDoughnut field is for Doughnut chart.
    dataLabel: {
      isDoughnut: false, // ! Remove
      fontSize: '24',
    },
    pieceLabel: {
      // !Remove
      responsive: true,
      maintainAspectRatio: true,
      render: function (args: any) {
        const value = args.value;
        return value;
      },
      fontColor: 'rgb(255,255,255)',
      fontStyle: 'bold',
      fontFamily: 'Helvetica',
      overlap: true,
    },
    // onHover: function (chart, array) {
    //   if (chart.toElement && chart.toElement.attributes.style) {
    //     if (array[0]) {
    //       chart.toElement.attributes.style.nodeValue =
    //           chart.toElement.attributes.style.nodeValue.replace('cursor: default;', 'cursor: pointer;');
    //       if (chart.toElement.attributes.style.nodeValue.indexOf('cursor: pointer;') === -1) {
    //         chart.toElement.attributes.style.nodeValue += 'cursor: pointer;';
    //       }
    //     } else {
    //       chart.toElement.attributes.style.nodeValue =
    //           chart.toElement.attributes.style.nodeValue.replace('cursor: pointer;', 'cursor: default;');
    //     }
    //   }
    // }
  };

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
    // console.log('hover', event, active);
  }
}
