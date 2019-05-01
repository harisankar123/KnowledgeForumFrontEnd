import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing-module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TilesService } from './landing/service/tile.service';
import { TilesResolver } from './landing/service/tile-resolver';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { SerachService } from './search/service/search-service';
import { SharedComponent } from './shared/shared.component';
import { SearchReportComponent } from './search-report/search-report.component';
import { SearchResultResolver } from './search-report/service/search-result-service';
import { MaterialComponent } from './material/material.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { LoginComponent } from './login/login.component';
import { UserService } from './login/Services/User.Services';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MultiBarChartComponent } from './multi-bar-chart/multi-bar-chart.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';

import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { NgApexchartsModule } from 'ng-apexcharts';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchComponent,
    SharedComponent,
    SearchReportComponent,
    MaterialComponent,
    LoginComponent,
    MultiBarChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    FusionChartsModule,
    NgApexchartsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    CarouselModule.forRoot()

  ],


  providers: [TilesService, TilesResolver, SerachService, SearchResultResolver, UserService, MultiBarChartComponent ],
  bootstrap: [AppComponent]

})
export class AppModule { }
