import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.scss'],
})
export class ComparationComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;



  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };
  public pieChartData: ChartData<'doughnut', number[], string | string[]> = {
    labels: [ 'Confirmados' , 'Recuperados' , 'Sospechosos', 'Descartados', 'Fallecidos' ],
    datasets: [
      { data:
        [
          350,
          450,
          100,
          230,
          50,
        ],
        backgroundColor:
        [
          '#97077D',
          '#038C2A',
          '#5F1F7B',
          '#0096C2',
          '#98CE17'
        ]
      }
    ]
  };
  public pieChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {}

}
