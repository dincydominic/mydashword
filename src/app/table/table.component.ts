import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SALLY', weight: 1.0079, symbol: '14000'},
  {position: 2, name: 'ABC', weight: 4.0026, symbol: '2200'},
  {position: 3, name: 'LITHIYA', weight: 6.941, symbol: '12330'},
  {position: 4, name: 'BERLIN', weight: 9.0122, symbol: '1223'},
  {position: 5, name: 'BORNY', weight: 10.811, symbol: '4566'},
  {position: 6, name: 'CARRY', weight: 12.0107, symbol: '3565'},
  {position: 7, name: 'NITRY', weight: 14.0067, symbol: '45665'},
  {position: 8, name: 'THOMAS', weight: 15.9994, symbol: '32445'},
  {position: 9, name: 'FlIYA', weight: 18.9984, symbol: '45666'},
  {position: 10, name: 'NEONY', weight: 20.1797, symbol: '3466'},
  {position: 11, name: 'SOPHY', weight: 22.9897, symbol: '32445'},
  {position: 12, name: 'MAYA', weight: 24.305, symbol: '54554'},
  {position: 13, name: 'ALLY', weight: 26.9815, symbol: '3455'},
  {position: 14, name: 'SILLY', weight: 28.0855, symbol: '34345'},
  {position: 15, name: 'PIYA', weight: 30.9738, symbol: '434435'},
  {position: 16, name: 'SOOFY', weight: 32.065, symbol: '434543'},
  {position: 17, name: 'CHANDY', weight: 35.453, symbol: '3431'},
  {position: 18, name: 'ARAY', weight: 39.948, symbol: '344341'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: '341324'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: '4331'},
];