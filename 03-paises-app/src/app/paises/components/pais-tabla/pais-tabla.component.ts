import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {
  @Input() paises!:Country[];
}
