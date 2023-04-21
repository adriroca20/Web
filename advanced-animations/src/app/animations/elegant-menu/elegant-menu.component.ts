import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elegant-menu',
  templateUrl: './elegant-menu.component.html',
  styleUrls: ['./elegant-menu.component.css']
})
export class ElegantMenuComponent implements OnInit{
  ngOnInit(): void {
    const menu:any = document.getElementById("menu")
    let menuItems = document.querySelectorAll(".menu-item")

    menuItems.forEach((item:any, index:number)=>{
      item.onmouseover = ()=>{
        menu.dataset.activeIndex = index;
      }
    })
  }

}
