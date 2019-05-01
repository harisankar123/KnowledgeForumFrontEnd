import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search/model/search-result-model';
import { ActivatedRoute } from '@angular/router';
import { MultiBarChartComponent } from '../multi-bar-chart/multi-bar-chart.component';

@Component({
  selector: 'app-search-report',
  templateUrl: './search-report.component.html',
  styleUrls: ['./search-report.component.css']
})
export class SearchReportComponent implements OnInit {
searchReports: SearchResult[];
measureDuration: number;
x: {}[];
y: {}[];
reportCategory: string;
  constructor(private route: ActivatedRoute, private bar: MultiBarChartComponent) { }

  ngOnInit() {
    this.reportCategory = this.route.snapshot.data.reportCategory;
    this.searchReports = this.reportCategory === 'ping' ? 
    this.route.snapshot.data.searchReports.filter(report => report.searchCategory === 'ping')
    : this.route.snapshot.data.searchReports.filter(report => report.searchCategory === 'dig');
    this.x = [];
    let ruralTime: {}[] = [];
    let urbanTime: {}[] = [];
    let nonCacheTime: {}[] = [];
    let cacheTime: {}[] = [];
    this.searchReports.forEach(report => {
      if(report.searchCategory =='ping') {
      this.setPingReportInfo(report, ruralTime, urbanTime);
    }
    else if(report.searchCategory =='dig') {
      this.setDigReportInfo(report, nonCacheTime, cacheTime);
    }
    });
    this.y = this.reportCategory === 'ping' ? [{ 'seriesname' : 'rural', data : ruralTime}, { 'seriesname' : 'urban', data : urbanTime}]
    : [{ 'seriesname' : 'cache miss', data : nonCacheTime}, { 'seriesname' : 'cache hit', data : cacheTime}];
  }

  private setPingReportInfo(report: SearchResult, ruralTime: {}[], urbanTime: {}[]) {
    if (this.x.map(function (e) { return e['label']; }).indexOf(report.url) == -1) {
      this.x.push({ 'label': report.url });
    }
    if (report.locationCategory == 'rural') {
      const temp: string = report.searchResult.split("Average")[1].trim();
      if (temp.endsWith('\n')) {
        ruralTime.push({ 'value': parseInt(temp.substring(0, temp.length - 3).split("=")[1].trim()) });
      }
      ruralTime.push({ 'value': parseInt(temp.substring(0, temp.length - 2).split("=")[1].trim()) });
    }
    if (report.locationCategory == 'urban') {
      const temp: string = report.searchResult.split("Average")[1].trim();
      urbanTime.push({ 'value': parseInt(temp.substring(0, temp.length - 2).split("=")[1].trim()) });
    }
  }

  private setDigReportInfo(report: SearchResult, nonCacheTime: {}[], cacheTime: {}[]) {
    if (this.x.map(function (e) { return e['label']; }).indexOf(report.url) == -1) {
      this.x.push({ 'label': report.url });
    }
    const temp: string = report.searchResult.split("Query time:")[1].trim();
    const timeTakenTemp = temp.split(" ")[1].trim();
    const timeTaken = parseInt(timeTakenTemp.substring(0, timeTakenTemp.length - 2).split("=")[1].trim())
    if (timeTaken != 0) {
      nonCacheTime.push({ 'value': timeTaken });
    }
    if (timeTaken == 0) {
      cacheTime.push({ 'value': timeTaken });
    }
  }

  getClassName(searchResult: string, index: number): string {
    if(index === 0 || !this.shouldCheckTimeTaken(index)) {
      return "yellow";
    }
    const previousTimeTaken = this.getTimeTaken(this.searchReports[index-1].searchResult);
    const currentTimeTaken = this.getTimeTaken(searchResult);
    if(currentTimeTaken === previousTimeTaken) {
      return "yellow";
    }else if(currentTimeTaken > previousTimeTaken) {
      return "red";
    }else {
      return "green";
    }
  }

  getTimeTaken(searchResult: string) {
    const indexOfTotalTimeTaken = searchResult.indexOf("totalseconds");
    return searchResult.substring(indexOfTotalTimeTaken).split("\n")[1];
  }

  shouldCheckTimeTaken(index: number) {
    const oldSearchReport = this.searchReports[index-1];
    const currentSearchReport = this.searchReports[index];
    return oldSearchReport.locationCategory === currentSearchReport.locationCategory &&
     oldSearchReport.searchCategory === currentSearchReport.searchCategory &&
     oldSearchReport.url === currentSearchReport.url;
  }
  getTimeInfo(searchReport:SearchResult): string {
    if(searchReport.searchCategory=='ping'){
      const avgTemp =searchReport.searchResult.split("Average")[1].trim();
      
      const avgTime = avgTemp.split("=")[1].trim();
     
      return avgTime;
    }
    return 'NA';
  }
  getTimeInfoMin(searchReport:SearchResult): string {
    if(searchReport.searchCategory=='ping'){
      
      const minTemp =searchReport.searchResult.split("Minimum")[1].trim();
      
 
      const minTime = minTemp.split("=")[1].trim().substring(0,3);
      
      return minTime;
    }
    return 'NA';
  }
  getTimeInfoMax(searchReport:SearchResult): string {
    if(searchReport.searchCategory=='ping'){
     
      const maxTemp =searchReport.searchResult.split("Maximum")[1].trim();
     
      const maxTime = maxTemp.split("=")[1].trim().substring(0,5);
      return maxTime;
    }
    return 'NA';
  }

  getCacheInfo(searchReport: SearchResult, index:number): string {
    const oldSearchReport = this.searchReports[index-1];
    const currentSearchReport = this.searchReports[index];
    if(searchReport.searchCategory === 'dig') {
      const oldQueryTemp = oldSearchReport.searchResult.split("Query time:")[1].trim();
      const oldQueryTime = oldQueryTemp.split(" ")[1].trim();
      const newQueryTemp = currentSearchReport.searchResult.split("Query time:")[1].trim();
      const newQueryTime = newQueryTemp.split(" ")[1].trim();
      if(oldQueryTime>newQueryTime) {
        return 'Cache hit';
      }
      return 'Cache miss';
    }
    return 'NA';
  }

}
