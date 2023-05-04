import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  show:boolean=false;
  ngOnInit() {
    window.onresize= ()=>{
      this.show=screen.width<1100
    }
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
          },
          {
            label: "Dark mode toggler",
            routerLink: "dark-mode-toggler",
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
          },
          {
            label: "Filter card",
            routerLink: "filter-card",
          }
        ]
      },
      {
        label: "Layouts",
        items: [
          {
            label: "Fluid flex",
            routerLink: "fluid-flex-layout",
          },
          {
            label: "Clamp",
            routerLink: "clamp-layout",
          }
        ]
      },
      {
        label: "Inputs",
        items: [
          {
            label: "Text",
            routerLink: "inputs-text",
          }
        ]
      },
    ];
  }
}
