import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search/model/search-result-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-report',
  templateUrl: './search-report.component.html',
  styleUrls: ['./search-report.component.css']
})
export class SearchReportComponent implements OnInit {
searchReports: SearchResult[];
measureDuration: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchReports = this.route.snapshot.data.searchReports;
    console.log(this.searchReports);
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

}
