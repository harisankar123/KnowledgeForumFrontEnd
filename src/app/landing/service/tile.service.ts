import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TileSettings } from '../models/tile-settings-model';

@Injectable()
export class TilesService {
    constructor(private http: HttpClient) {}
    getTiles(): Observable<TileSettings[]> {
        return this.http.get<TileSettings[]>(`/api/getTiles`);
    }
}

