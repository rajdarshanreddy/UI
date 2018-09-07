import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';

 

export interface UserData {
  id: string;
  date: string;
  alerttitle: string;
}


/** Constants used to fill up our data base. */
const DATE: string[] = ['1/13/1969', '4/18/1969', '7/31/1970', '1/04/1972', '6/28/1972',
  '2/09/1977', '5/02/1977', '6/25/1980', '7/24/1980', '5/21/1982', '12/31/1982', '11/06/1990',
  '12/15/1994', '1/31/1996', '9/08/1997'];
const ALERTTITLE: string[] = ['new update', 'Store 22 robbed', 'Schedule', 'Script pad stolen', 'new update', 'PMP Maintenance',
  'new update', 'Store 22 robbed', 'Demo PMP', 'PMP Maintenance', 'new update', 'Script pad stolen',
  'PMP Maintenance', 'Script pad stolen', 'Schedule', 'new update', 'Script pad stolen', 'Schedule', 'Store 22 robbed'];



@NgModule({
  imports: [
    MatSortModule, MatTableModule, CdkTableModule
  ],
  exports: [
    MatSortModule, MatTableModule, CdkTableModule
  ],
})

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.css']
})
export class AlertsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'alerttitle'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 15 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {

    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selected = '12';

}

function createNewUser(id: number): UserData {
  const alerttitle =
  ALERTTITLE[Math.round(Math.random() * (ALERTTITLE.length - 1))];
  const date =
    DATE[Math.round(Math.random() * (DATE.length - 1))];
  return {
    id: id.toString(),
    date: date,
    alerttitle: alerttitle
  }; 
}