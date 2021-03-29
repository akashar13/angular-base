import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Iemployee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  private _url: string="https://api.thedogapi.com/v1/breeds?limit=8&page=0";

  getemployees():Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this._url)  
  }
  constructor(private http:HttpClient) { }
}
