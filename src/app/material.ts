import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule,MatSortModule,MatSort, MatTableDataSource} from '@angular/material';
import { GoogleChartsModule } from 'angular-google-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
      BrowserAnimationsModule,
      MatInputModule,MatFormFieldModule,MatCheckboxModule,MatTableModule,MatSortModule, 
      FormsModule, ReactiveFormsModule, MatSelectModule,GoogleChartsModule,MatButtonModule,MatSidenavModule,RouterModule
    ],
    exports: [
      BrowserAnimationsModule,
      MatInputModule,MatFormFieldModule,MatCheckboxModule,MatTableModule,MatSortModule,
      FormsModule, ReactiveFormsModule, MatSelectModule,GoogleChartsModule,MatButtonModule,MatSidenavModule,RouterModule
    ]
  })
  export class MaterialModule { }