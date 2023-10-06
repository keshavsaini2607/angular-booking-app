import { Component } from '@angular/core';
import { HomeNavLinks } from '../utils/Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight-book';
  homeLinks = HomeNavLinks;
  acitveTab = 'home'
}
