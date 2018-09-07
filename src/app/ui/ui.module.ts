import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftmenueComponent } from './leftmenue/leftmenue.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { UnsolicitedReportsComponent } from './unsolicited-reports/unsolicited-reports.component';
import { UnsolicitedReportsThresholdComponent } from './unsolicited-reports/unsolicited-reports-threshold/unsolicited-reports-threshold.component';
import { UnsolicitedReportsTopPatientsComponent } from './unsolicited-reports/unsolicited-reports-top-patients/unsolicited-reports-top-patients.component';
import { UnsolicitedReportsValidPatientsComponent } from './unsolicited-reports/unsolicited-reports-valid-patients/unsolicited-reports-valid-patients.component';
import { UnsolicitedReportsHistoryComponent } from './unsolicited-reports/unsolicited-reports-history/unsolicited-reports-history.component';

import { MaterialModule } from '../material';
import { GoogleChartsModule } from 'angular-google-charts';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsListComponent } from './alerts/alerts-list/alerts-list.component';
import { AlertsNewComponent } from './alerts/alerts-new/alerts-new.component';
import { NewsComponent } from './news/news.component';
import { NewsNewComponent } from './news/news-new/news-new.component';
import { HomeComponent } from './home/home.component';

library.add(fas);

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,GoogleChartsModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LeftmenueComponent, DashboardComponent, DashboardHomeComponent, UnsolicitedReportsComponent, UnsolicitedReportsThresholdComponent, UnsolicitedReportsTopPatientsComponent, UnsolicitedReportsValidPatientsComponent, UnsolicitedReportsHistoryComponent, DemoTableComponent, AlertsComponent, AlertsListComponent, AlertsNewComponent, NewsComponent, NewsNewComponent, HomeComponent],
  exports: [LayoutComponent,GoogleChartsModule]
})
export class UiModule { }
