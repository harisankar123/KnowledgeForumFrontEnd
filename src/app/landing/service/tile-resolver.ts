import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TileSettings } from '../models/tile-settings-model';
import { Observable } from 'rxjs';
import { TilesService } from './tile.service';

@Injectable()
export class TilesResolver implements Resolve<TileSettings[]> {
    constructor(private tileService: TilesService) {}
    resolve(): Observable<TileSettings[]> {
        return this.tileService.getTiles();
    }
}
