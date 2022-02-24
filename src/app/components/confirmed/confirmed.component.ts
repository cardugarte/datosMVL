import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ResumeService } from 'src/app/services/resume.service';



@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss'],
})
export class ConfirmedComponent implements OnInit {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Testeados', backgroundColor: '#5F1F7B' },
      { data: [ 28, 38, 40, 19, 36, 29, 26 ], label: 'Confirmados', backgroundColor: '#038C2A' },
      { data: [ 16, 18, 15, 12, 12, 17, 18 ], label: 'Fallecidos', backgroundColor: '#0096C2' }
    ]
  };



  constructor(
    private resumeService: ResumeService,
  ) {}


  ngOnInit() {
    // this.getConfirmed();
  }

    // getConfirmed() {
    //   this.resumeService.getDataConfirmed()
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    // }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

  }

}
