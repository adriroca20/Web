import { Component, EventEmitter, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {
  @Output() onEnter:EventEmitter<string> =  new EventEmitter();
  termino:string=""

  buscar():void{
    this.onEnter.emit(this.termino)
  }
}
