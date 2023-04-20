import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen-menu',
  templateUrl: './full-screen-menu.component.html',
  styleUrls: ['./full-screen-menu.component.css']
})
export class FullScreenMenuComponent implements OnInit {
  ngOnInit(){
    let links= document.querySelectorAll(".link")
    links.forEach((link:any)=>{
      link.onmousemove= (e:any)=>this.handleOnMouseMove(e, link)
    })
  }
  handleOnMouseMove(e:any, link:any){
    const decimal = e.clientX/ link.offsetWidth;
    const basePercent = 80,
          percentRange=20,
          adjustablePercernt= percentRange * decimal
          
    const colorPercent = basePercent + adjustablePercernt;
    link.style.setProperty("--color-percent", `${colorPercent}%`);
  }
}
