import {  Component} from '@angular/core';


import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],


})

export class PlayerComponent  {


  item: []

  // We need use the ActivatedRoute object to get access
  // to information about the current route
  constructor(private activatedRoute: ActivatedRoute){

    // Get the query string value from our route
    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');
    console.log(JSON.parse(myArray));
    this.item=JSON.parse(myArray)
  }


}
