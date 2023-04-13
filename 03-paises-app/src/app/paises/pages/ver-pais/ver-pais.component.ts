import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap} from "rxjs/operators"
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais!: Country
  traducciones:string[]=[]
  constructor(private actRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    // this.actRoute.params
    // .pipe(
    //   switchMap(({id}) => {
    //     // Coge lo que salga del siguiente subscribe y lo utiliza,  para no tener subscribes anidados
    //     return this.paisService.getCountryByID(id);
    //   })
    // ).subscribe(pais => {
    //   this.pais=pais[0]
    //   console.log(this.pais)
    // }, (error)=>{
    // })

    this.actRoute.params.subscribe((params:any)=>{
     this.paisService.getCountryByID(params.id).subscribe((pais)=>{
      this.pais=pais[0];
      this.traducciones= Object.keys(this.pais.translations);
      console.log( this.pais)
     })
    })
  }

}
