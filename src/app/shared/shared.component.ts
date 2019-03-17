import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  @ViewChild('mySidenav') mySidenav: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.mySidenav.nativeElement.style.width = '250px';
  }

  closeNav() {
    this.mySidenav.nativeElement.style.width = '0';
  }

}
