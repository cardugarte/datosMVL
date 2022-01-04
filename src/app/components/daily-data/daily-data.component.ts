import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  fecha: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '10/01/2022', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {fecha: '10/01/2022', name: 'Helium', weight: 4.0026, symbol: 'He'},
  {fecha: '10/01/2022', name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {fecha: '10/01/2022', name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {fecha: '10/01/2022', name: 'Boron', weight: 10.811, symbol: 'B'},
  {fecha: '10/01/2022', name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {fecha: '10/01/2022', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {fecha: '10/01/2022', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {fecha: '10/01/2022', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {fecha: '10/01/2022', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-daily-data',
  templateUrl: './daily-data.component.html',
  styleUrls: ['./daily-data.component.scss'],
})




export class DailyDataComponent {

  displayedColumns: string[] = ['fecha', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor() { }
}
