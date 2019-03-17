import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TileSettings } from './models/tile-settings-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  tiles: TileSettings[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.tiles = this.route.snapshot.data.tiles;
    console.log(this.tiles); /* Tiles received from backend */
  }
}
