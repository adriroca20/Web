import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private query:string="https://api.giphy.com/v1/gifs/search?api_key=x5Bo5AKtFRFsDDR44fhPb4qCHyc8FfMs&limit=25&offset=0&rating=g&lang=en&q="
  private _historial: string[] = []
  public resultados!: Gif[]
  constructor(private http:HttpClient){
    if(!localStorage.getItem("historial")){return}
    this._historial=JSON.parse(localStorage.getItem("historial")!);
  }

  get historial(){
    return [...this._historial];
  }
  recuperarHistorial(query:string):void{
    this.resultados = JSON.parse(localStorage.getItem(query)!) || []
  }
  buscarGifs(query:string){
    query= query.trim().toLowerCase()
    if(this._historial.includes(query)){
      return
    }
    
    this._historial.unshift(query)
    this._historial= this._historial.splice(0,9)
    localStorage.setItem("historial", JSON.stringify(this._historial));

    const endpoint:string = this.query + query;
    this.http.get<SearchGifsResponse>(endpoint).subscribe((res:SearchGifsResponse)=>{
      this.resultados=res.data;
      localStorage.setItem(query, JSON.stringify(res.data))
    })

  }
}
