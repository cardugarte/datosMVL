/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { CovidDataResume } from './../../models/home.model';

import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ResumeService } from 'src/app/services/resume.service';



@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.scss'],
})
export class ComparationComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  //Variables de datos:
    dataCovid: CovidDataResume;
    tagNameDeath: string;
    numberDataDeath: number = 0;
    tagNameConfirmed: string;
    numberDataConfirmed: number = 0;
    tagNameSuspicious: string;
    numberDataSuspicious: number = 0;
    tagNameDiscarded: string;
    numberDataDiscarded: number = 0;
    tagNameRecovered: string;
    numberDataRecovered: number = 0;
    tagNameDuplication: string;
    numberDataDuplication: number = 0;

  constructor(
    private resumeService: ResumeService,
  ) {
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.resumeService.getData()
    .subscribe(data => {
      this.dataCovid = data;
      // eslint-disable-next-line radix
      this.numberDataDeath = parseInt(data.result.fArray[8].fStr);
      this.tagNameDeath = data.result.fArray[1].fStr;
      this.tagNameConfirmed = data.result.fArray[2].fStr;
      this.numberDataConfirmed = parseInt(data.result.fArray[9].fStr);
      this.tagNameSuspicious = data.result.fArray[3].fStr;
      this.numberDataSuspicious = parseInt(data.result.fArray[10].fStr);
      this.tagNameDiscarded = data.result.fArray[4].fStr;
      this.numberDataDiscarded = parseInt(data.result.fArray[11].fStr);
      this.tagNameRecovered = data.result.fArray[5].fStr;
      this.numberDataRecovered = parseInt(data.result.fArray[12].fStr);
      this.tagNameDuplication = data.result.fArray[6].fStr;
      this.numberDataDuplication = parseInt(data.result.fArray[13].fStr);
      console.log(data);
    });
  }


// eslint-disable-next-line @typescript-eslint/member-ordering
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
// pieChartData: ChartData<'doughnut', number[], string | string[]> = {
//   labels: [ 'Confirmados' , 'Recuperados' , 'Sospechosos', 'Descartados', 'Fallecidos' ],
//   datasets: [
//     { data:
//       [
//         100,
//         this.numberData,
//         100,
//         230,
//         50,
//       ],
//       backgroundColor:
//       [
//         '#97077D',
//         '#038C2A',
//         '#5F1F7B',
//         '#0096C2',
//         '#98CE17'
//       ]
//     }
//   ]
// };
pieChartType: ChartType = 'doughnut';


}
