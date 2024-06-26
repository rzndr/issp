import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from '@issp/common/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';

export interface YearlySaleChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'issp-yearly-sales',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, TablerIconsModule],
  templateUrl: './yearly-sales.component.html',
})
export class YearlySalesComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public yearlySaleChart!: Partial<YearlySaleChart> | any;

  constructor() {
    this.yearlySaleChart = {
      series: [
        {
          name: '',
          data: [20, 15, 30, 25, 10, 15],
        },
      ],

      chart: {
        type: 'bar',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 320,
      },
      colors: [
        '#ECF2FF',
        '#ECF2FF',
        '#5D87FF',
        '#ECF2FF',
        '#ECF2FF',
        '#ECF2FF',
      ],
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        categories: [['Apr'], ['May'], ['June'], ['July'], ['Aug'], ['Sept']],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
