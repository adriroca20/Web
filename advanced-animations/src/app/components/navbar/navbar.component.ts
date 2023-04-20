import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: "/"
      },
      {
        separator:true
      },
      {
        label: "Card effects",
        items: [
          {
            label: "Light hover",
            routerLink: "light-hover",
          },
          {
            label: "Twitch card",
            routerLink: "twitch-card",
          }
        ]
      },
      {
        label: "Menu effects",
        items: [
          {
            label: "Full screen menu",
            routerLink: "full-screen-menu",
          }
        ]
      },
      {
        label: "Header effects",
        items: [
          {
            label: "Split header",
            routerLink: "split-header",
          }
        ]
      },
      {
        label: "Text effects",
        items: [
          {
            label: "Magic sparkles",
            routerLink: "magic-sparkles",
          }
        ]
      },

    ];
  }
}
