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


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchComponent,
    SharedComponent,
    SearchReportComponent,
    MaterialComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    CarouselModule.forRoot()

  ],


  providers: [TilesService, TilesResolver, SerachService, SearchResultResolver,UserService ],
  bootstrap: [AppComponent]

})
export class AppModule { }
