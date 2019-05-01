import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TilesResolver } from './landing/service/tile-resolver';
import { SearchComponent } from './search/search.component';
import { SearchReportComponent } from './search-report/search-report.component';
import { SearchResultResolver } from './search-report/service/search-result-service';
import {MaterialComponent} from './material/material.component';
import { LoginComponent } from './login/login.component';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'home',
  component: LandingComponent,
  resolve: {tiles: TilesResolver},
 },
 {
  path: 'material',
  component: MaterialComponent
},
 {
   path: 'demo',
   component: SearchComponent
 },
 {
  path: 'pingreport',
  component: SearchReportComponent,
  data: {reportCategory:'ping'},
  resolve: {searchReports: SearchResultResolver},
},

 {
  path: 'digreport',
  component: SearchReportComponent,
  data: {reportCategory:'dig'},
  resolve: {searchReports: SearchResultResolver},
},
{
  path: 'login',
  component: LoginComponent,
  resolve: {searchReports: SearchResultResolver},
},
{
  path: 'chart',
  component: MultiBarChartComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
