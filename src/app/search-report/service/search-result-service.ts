import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchResult } from '../../search/model/search-result-model';
import { SerachService } from '../../search/service/search-service';

@Injectable()
export class SearchResultResolver implements Resolve<SearchResult[]> {
    constructor(private searchService: SerachService) {}
    resolve(): Observable<SearchResult[]> {
        return this.searchService.getSearchReport();
    }
}
