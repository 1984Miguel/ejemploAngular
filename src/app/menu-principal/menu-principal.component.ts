import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs/Observable"
import "rxjs/add/operator/map"
import {environment} from "../../environments/environment";
import {SearchCriteria} from "../models/search-criteria";
import {SearchCriteriaService} from "../services/menu-control.service"

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

 
   @Input() datos: SearchCriteria[];



  searchCriteria$: Observable<SearchCriteria[]>
  constructor(private _searchCriteriaService: SearchCriteriaService) { }

  ngOnInit() {

    this.searchCriteria$= this._searchCriteriaService.obtainTerminal();

  }

}
