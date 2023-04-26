import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-header',
  templateUrl: './split-header.component.html',
  styleUrls: ['./split-header.component.css']
})
export class SplitHeaderComponent implements OnInit{
  ngOnInit(){
    const leftSlide:any= document.getElementById("left-side");
    document.onmousemove= (e:any)=>this.handleOnMouseMove(e,leftSlide);
    document.ontouchmove= (e:any)=>this.handleOnMouseMove(e.touches[0],leftSlide);
  }
  handleOnMouseMove(e:any, leftSlide:any){
    const width = e.clientX/window.innerWidth * 100; 
    leftSlide.style.width= `${width}%`
    
  }
}
