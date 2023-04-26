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
          },
          {
            label: "Elegant menu",
            routerLink: "elegant-menu",
          }
        ]
      },
      {
        label: "Header effects",
        items: [
          {
            label: "Split header",
            routerLink: "split-header",
          },
          {
            label: "Staggered grid",
            routerLink: "staggered-grid",
          }
        ]
      },
      {
        label: "Mouse trailers",
        items: [
          {
            label: "Smart mouse",
            routerLink: "smart-mouse",
          },
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
      {
        label: "Buttons effects",
        items: [
          {
            label: "Hover buttons",
            routerLink: "buttons-hover",
          }
        ]
      },
      {
        label: "Loaders",
        items: [
          {
            label: "Wavy loader",
            routerLink: "wavy-loader",
          }
        ]
      },
      {
        label: "Carousels",
        items: [
          {
            label: "Movies gallery",
            routerLink: "movies-gallery",
          }
        ]
      },
    ];
  }
}
