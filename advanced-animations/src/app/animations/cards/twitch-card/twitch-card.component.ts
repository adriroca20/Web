import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitch-card',
  templateUrl: './twitch-card.component.html',
  styleUrls: ['./twitch-card.component.css']
})
export class TwitchCardComponent implements OnInit{
  ngOnInit(){
    const subtitle = document.querySelectorAll(".subtitle")[0];
    console.log(subtitle)
    const createWord = (text:any,index:any)=>{
      const word = document.createElement("p");
      word.innerHTML= `${text}`;
      word.classList.add("word");
      word.style.transitionDelay= `${index*50}ms`
      return word;
    }
    const addWord= (text:string,index:number)=>{
      subtitle.appendChild(createWord(text,index))
    }
    const createSubtitle= (text:any)=>{
      text.split(" ").map(addWord)
    }
    createSubtitle("Lorem ipsum, dolor sit amet consectetur adipisicing.");
  }
}