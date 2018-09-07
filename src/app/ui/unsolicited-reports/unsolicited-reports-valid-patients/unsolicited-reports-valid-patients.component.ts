import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';



export interface UserData {
  id: string;
  name: string;
  dob: string;
  prescribers: string;
  dispensers: string;
  prescriptions: string;
  added: string;
  lnk: string;
}


/** Constants used to fill up our data base. */
const ADDED: string[] = ['1/13/1969', '4/18/1969', '7/31/1970', '1/04/1972', '6/28/1972',
  '2/09/1977', '5/02/1977', '6/25/1980', '7/24/1980', '5/21/1982', '12/31/1982', '11/06/1990',
  '12/15/1994', '1/31/1996', '9/08/1997'];
const DOB: string[] = ['1/13/1969', '4/18/1969', '7/31/1970', '1/04/1972', '6/28/1972',
  '2/09/1977', '5/02/1977', '6/25/1980', '7/24/1980', '5/21/1982', '12/31/1982', '11/06/1990',
  '12/15/1994', '1/31/1996', '9/08/1997'];
const PRESCRIBERS: string[] = ['1', '2', '3', '3', '4', '5'];
const DISPENSERS: string[] = ['6', '2', '3', '3', '4', '5'];;
const PRESCRIPTIONS: string[] = ['6', '2', '3', '3', '4', '5'];;
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@NgModule({
  imports: [
    MatSortModule, MatTableModule, CdkTableModule
  ],
  exports: [
    MatSortModule, MatTableModule, CdkTableModule
  ],
})

@Component({
  selector: 'app-unsolicited-reports-valid-patients',
  templateUrl: './unsolicited-reports-valid-patients.component.html',
  styleUrls: ['./unsolicited-reports-valid-patients.component.css']
})

export class UnsolicitedReportsValidPatientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'dob', 'prescribers', 'dispensers', 'prescriptions', 'added', 'lnk'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

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
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const dob =
    DOB[Math.round(Math.random() * (DOB.length - 1))];
  const prescribers =
    PRESCRIBERS[Math.round(Math.random() * (PRESCRIBERS.length - 1))];
  const dispensers =
    DISPENSERS[Math.round(Math.random() * (DISPENSERS.length - 1))];
  const prescriptions =
    PRESCRIPTIONS[Math.round(Math.random() * (PRESCRIPTIONS.length - 1))];
  const added =
    ADDED[Math.round(Math.random() * (ADDED.length - 1))];
    const lnk = "";
  return {
    id: id.toString(),
    name: name,
    dob: dob,
    prescribers: prescribers,
    dispensers: dispensers,
    prescriptions: prescriptions,
    added: added,
    lnk:lnk
  };
}