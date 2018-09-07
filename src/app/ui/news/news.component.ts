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
  newsheadline: string;
}


/** Constants used to fill up our data base. */
const DATE: string[] = ['1/13/1969', '4/18/1969', '7/31/1970', '1/04/1972', '6/28/1972',
  '2/09/1977', '5/02/1977', '6/25/1980', '7/24/1980', '5/21/1982', '12/31/1982', '11/06/1990',
  '12/15/1994', '1/31/1996', '9/08/1997'];
const NEWSHEADLINE: string[] = ['PMP Interconnect adds state', 'Pdf Report Downloads', 'Patient Batch Search', 'PMP Downtime', 'Server Maintenance', 'PMP UP',
  'PMP Interconnect adds state', 'Pdf Report Downloads', 'Server Maintenance', 'PMP Downtime', 'PMP UP', 'Patient Batch Search',
  'PMP Interconnect adds state', 'Pdf Report Downloads', 'Server Maintenance', 'Download Reports', 'PMP Downtime', 'PMP UP', 'Patient Batch Search'];



@NgModule({
  imports: [
    MatSortModule, MatTableModule, CdkTableModule
  ],
  exports: [
    MatSortModule, MatTableModule, CdkTableModule
  ],
})

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'newsheadline'];
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
  const newsheadline =
  NEWSHEADLINE[Math.round(Math.random() * (NEWSHEADLINE.length - 1))];
  const date =
    DATE[Math.round(Math.random() * (DATE.length - 1))];
  return {
    id: id.toString(),
    date: date,
    newsheadline: newsheadline
  }; 
}