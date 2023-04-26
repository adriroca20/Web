import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staggered-grid',
  templateUrl: './staggered-grid.component.html',
  styleUrls: ['./staggered-grid.component.css']
})
export class StaggeredGridComponent implements OnInit{
  tiles:any[]=[];
  ngOnInit(): void {
    this.createGrid()
    window.onresize = ()=>{
      this.createGrid()
    }
  }
  createGrid(){
    const wrapper:any = document.getElementById("tiles");
    let columns = Math.floor(document.body.clientWidth/50)
    let rows = Math.floor(document.body.clientHeight/50)
    let numberTiles=columns * rows;
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    for(let i=0;i<numberTiles;i++){
      this.tiles.push(i)
    }
  }
}
