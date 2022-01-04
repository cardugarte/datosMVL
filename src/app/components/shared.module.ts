import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { ComparationComponent } from './comparation/comparation.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { DailyDataComponent } from './daily-data/daily-data.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    ConfirmedComponent,
    ComparationComponent,
    TimeLineComponent,
    DailyDataComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgChartsModule,
    MatTableModule,

  ],
  exports: [
    ToolbarComponent,
    ConfirmedComponent,
    ComparationComponent,
    TimeLineComponent,
    DailyDataComponent,
  ]
})
export class SharedModule { }
