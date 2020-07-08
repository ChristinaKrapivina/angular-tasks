import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  navItems: NavItem[] = [
    {
      link: '/lecture2',
      name: 'Lecture 2'
    },
    {
      link: '/lecture3',
      name: 'Lecture 3'
    },
    {
      link: '/lecture4',
      name: 'Lecture 4 & 6-9'
    },
    {
      link: '/lecture5',
      name: 'Lecture 5'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
export class NavItem {
    link: string
    name: string
}
