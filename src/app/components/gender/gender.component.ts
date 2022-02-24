import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit {


@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


pieChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        color: '#97077D',
        font: {
          weight: '700'
        }
      },
    }
  }
};
pieChartData: ChartData<'doughnut', number[], string | string[]> = {
  labels: [ 'Confirmados' , 'Recuperados' , 'Sospechosos', 'Descartados', 'Fallecidos' ],
  datasets: [
    { data:
      [
        100,
        100,
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
pieChartType: ChartType = 'doughnut';


constructor(
  private http: HttpClient
) { }

ngOnInit() {

}

}

