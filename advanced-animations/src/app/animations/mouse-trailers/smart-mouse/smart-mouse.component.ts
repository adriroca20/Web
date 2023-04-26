import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-mouse',
  templateUrl: './smart-mouse.component.html',
  styleUrls: ['./smart-mouse.component.css']
})
export class SmartMouseComponent implements OnInit{
  ngOnInit(){
    const trailer:any= document.querySelectorAll(".trailer")[0];
    window.onmousemove= (e:any)=>{
      const x = e.clientX - trailer.offsetWidth/2;
      const y = e.clientY - trailer.offsetHeight/2;
      trailer.style.transform = `translate(${x}px, ${y}px)`
    }
  }
}
