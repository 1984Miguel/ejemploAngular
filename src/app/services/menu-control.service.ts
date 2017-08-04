import { Injectable, Input } from '@angular/core';
import {SearchCriteria} from "../models/search-criteria"

import {Http, Response} from "@angular/http"
import {Observable} from "rxjs/Observable"
import "rxjs/add/operator/map"

import {environment} from "../../environments/environment";

@Injectable()
export class MenuControlService {


  @Input() datos: SearchCriteria[];
   searchCriteria = SearchCriteria[];
  constructor(private _http: Http) { }

  obtinTerminal(): Observable<SearchCriteria[]>
    {
  
       return this._http
       .get(`${environment.apiUri}/searchcriteria`)
       .map((respuesta : Response) =>{
           return SearchCriteria.newOfJson(respuesta.json)

}
}
}
