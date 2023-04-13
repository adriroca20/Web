import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  hayError:boolean=false;
  paises:Country[]=[]
  terminoBusqueda:string=""
  constructor(private paisService:PaisService){}

  buscar(termino:string):void{
    this.terminoBusqueda=termino;
    this.hayError=false;

    this.paisService.buscarCapital(termino)
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
