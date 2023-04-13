import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  hayError:boolean=false;
  mostrarSugerencias:boolean=false;
  paises:Country[]=[]
  paisesSugeridos:Country[]=[]
  terminoBusqueda:string=""
  constructor(private paisService:PaisService){}

  buscar(termino:string):void{
    this.terminoBusqueda=termino;
    this.hayError=false;

    this.paisService.buscarPais(termino)
    .subscribe((paises)=>{
      console.log(paises)
      this.paises=paises;
    },(err)=>{
      console.log(err)
      this.hayError=true;
    })
  }

  sugerencias(termino:string){
    if(termino==""){this.mostrarSugerencias=false; return}
    this.hayError=false;
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino)
    .subscribe((paises)=>{
      this.paisesSugeridos=paises.splice(0,4);
    })
  }
}
