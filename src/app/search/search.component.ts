import { Component, OnInit } from '@angular/core';
import { SerachService } from './service/search-service';
import { SearchCriteria } from './model/search-criteria-model';
import { SearchResult } from './model/search-result-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
isMeasure = false;
isLoading = false;
dataservice: any;
serachResult: string;
searchCriteria: SearchCriteria;
  constructor(private searchService: SerachService) { }

  ngOnInit() {
    this.searchCriteria = {url: '', locationCategory: 'NA', searchCategory: 'None'};
  }

  onChange(event: any) {
  if ( event.target.value === 'measure') {
    this.isMeasure = true;
  } else {
    this.isMeasure = false;
  }
  }

  onSubmit() {
    this.searchService.getSearchResult(this.searchCriteria).subscribe((result: SearchResult) => {
      this.serachResult = result.searchResult;
      this.Submit();
    });
  }
  Submit(){
    this.isLoading = true;
            this.dataservice.httpGet('../..')
                .subscribe((data: any) => {

                    this.isLoading = false;

                },
                err => {
                    this.isLoading = false;
                }
                );
        }
}
