import { Component, Input, OnInit } from '@angular/core';
import { NavLinks } from 'src/utils/Types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() links: NavLinks[] = [];
  @Input() color?: string = '';
  activeLink: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
