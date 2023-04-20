import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anim-light-hover',
  templateUrl: './light-hover.component.html',
  styleUrls: ['./light-hover.component.css']
})
export class LightHoverComponent implements OnInit {
  ngOnInit(): void {
    let cards:any= document.querySelectorAll(".card")
    
    cards.forEach((card:any) => {
      card.onmousemove= (e:any)=>this.handleOnMouseMove(e)
    });
  }
  handleOnMouseMove(e:any){
      const target= e.target;
      let box = target.getBoundingClientRect()
      let x = e.clientX - box.left;
      let y = e.clientY - box.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    }
}
