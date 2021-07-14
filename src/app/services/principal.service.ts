import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private httpClient: HttpClient,private router:Router) { }

  private httpHeaders:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  //POST 
consultarTipoCambio(first:string,second:string){
  const url="http://localhost:8080/tipocambio";
  let params = new HttpParams().set('first',first).set('second',second);
  return this.httpClient.get(url,{params});
}

//GET

obtnerTipoCambio(){
  const url="http://localhost:8080/consultatipocambio";
  return this.httpClient.get(url);
}

  
}
