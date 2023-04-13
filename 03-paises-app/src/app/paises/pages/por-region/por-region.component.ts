import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  hayError:boolean=false;
  paises:Country[]=[]
  terminoBusqueda:string=""
  constructor(private paisService:PaisService){}

  buscar(termino:string):void{
    this.terminoBusqueda=termino;
    this.hayError=false;

    this.paisService.buscarRegion(termino)
    .subscribe((paises)=>{
      console.log(paises)
      this.paises=paises;
    },(err)=>{
      console.log(err)
      this.hayError=true;
    })
  }

  sugerencias(termino:string){
    this.hayError=false;
  }
}
