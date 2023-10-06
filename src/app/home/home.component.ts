import { Component, OnInit } from '@angular/core';
import { HomeNavLinks } from 'src/utils/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeLinks = HomeNavLinks;
  constructor() { }

  ngOnInit(): void {
  }

}
