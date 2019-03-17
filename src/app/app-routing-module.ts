import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TilesResolver } from './landing/service/tile-resolver';
import { SearchComponent } from './search/search.component';
import { SearchReportComponent } from './search-report/search-report.component';
import { SearchResultResolver } from './search-report/service/search-result-service';


const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'landing',
  component: LandingComponent,
  resolve: {tiles: TilesResolver},
 },
 {
   path: 'search',
   component: SearchComponent
 },
 {
  path: 'report',
  component: SearchReportComponent,
  resolve: {searchReports: SearchResultResolver},
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
