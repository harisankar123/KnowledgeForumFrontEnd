import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCriteria } from '../model/search-criteria-model';
import { map } from 'rxjs/operators';
import { SearchResult } from '../model/search-result-model';
@Injectable()
export class SerachService {
    constructor(private http: HttpClient) {}
    getSearchResult(searchCriteria: SearchCriteria): Observable<SearchResult> {
        return this.http.post<SearchResult>(`/api/search`, searchCriteria);
    }

    getSearchReport(): Observable<SearchResult[]> {
        return this.http.get<SearchResult[]>(`/api/getReport`);
    }
}

