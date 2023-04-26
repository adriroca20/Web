import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-sparkles',
  templateUrl: './text-sparkles.component.html',
  styleUrls: ['./text-sparkles.component.css']
})
export class TextSparklesComponent implements OnInit{
  index:number = 0;
  interval:number = 1000;
  rand= (min:number,max:number)=>{
    return Math.floor(Math.random() * (max-min+1)) + min;
  }
  animate = (star:any)=>{
    star.style.setProperty("--star-left", `${this.rand(-10,100)}%`);
    star.style.setProperty("--star-top", `${this.rand(-40,80)}%`);

    star.style.animation="none";
    star.offsetHeight;
    star.style.animation="";
  }
  ngOnInit(){
    let stars= document.querySelectorAll(".magic-star");
    stars.forEach((star:any)=>{
      setTimeout(()=>{
        this.animate(star);
        setInterval(()=>{
          this.animate(star)
        },1000)
      },this.index++ * (this.interval/3))
    })
  }

}
