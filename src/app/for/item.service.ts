import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ItemService {
  public httpClient;
  constructor() { }

  getitem(){
    return[
    {Id: 1, Name: 'Mark', Age: 21, Dept: 'cse'},
    {Id: 2, Name: 'Jacob', Age: 22, Dept: 'it'},
    {Id: 3, Name: 'Larry', Age: 21, Dept: 'it'}
  ]
  
  }
 
}
