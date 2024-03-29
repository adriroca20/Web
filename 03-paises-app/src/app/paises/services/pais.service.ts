import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiURL:string="https://restcountries.com/v3.1"

  get httpParams(){
    return new HttpParams().set("fields", "name,population,flags,cca3")
  }
  constructor(private http:HttpClient) { }
  
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }
  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }
  buscarRegion(termino:string):Observable<Country[]>{
    const url = `${this.apiURL}/region/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }
  getCountryByID(id:string):Observable<Country[]>{
    const url = `${this.apiURL}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }
}
