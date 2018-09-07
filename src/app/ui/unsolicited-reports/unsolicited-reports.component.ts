import { Component, OnInit } from '@angular/core';
// import { MaterialModule } from './fromsrc/app/ui/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    // MaterialModule
  ],
})

@Component({
  selector: 'app-unsolicited-reports',
  templateUrl: './unsolicited-reports.component.html',
  styleUrls: ['./unsolicited-reports.component.css']
})
export class UnsolicitedReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
