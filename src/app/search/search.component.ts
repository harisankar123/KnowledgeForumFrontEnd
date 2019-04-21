import { Component, OnInit } from '@angular/core';
import { SerachService } from './service/search-service';
import { SearchCriteria } from './model/search-criteria-model';
import { SearchResult } from './model/search-result-model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
shouldDisplayLocation = true;
isLoading = false;
dataservice: any;
serachResult: string;
searchCriteria: SearchCriteria;
  constructor(private searchService: SerachService
    , private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.searchCriteria = {url: '', locationCategory: 'NA', searchCategory: 'None'};
  }

  onChange(event: any) {
  if ( event.target.value !== 'nslookup' && event.target.value !== 'flushdns' && event.target.value !== 'displaydns') {
    this.shouldDisplayLocation = true;
  } else {
    this.shouldDisplayLocation = false;
  }
  }

  onSubmit() {
    this.spinnerService.show();
    this.searchService.getSearchResult(this.searchCriteria).subscribe((result: SearchResult) => {
    this.serachResult = result.searchResult;
    this.spinnerService.hide();

    });
  }

}
