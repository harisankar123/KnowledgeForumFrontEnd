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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchReports = this.route.snapshot.data.searchReports;
    console.log(this.searchReports);
  }

}
