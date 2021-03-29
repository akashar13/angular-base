import {  Component,EventEmitter,Input, ViewEncapsulation,OnInit, Output} from '@angular/core';


import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],


})

export class PlayerComponent  {
  @Input() label:string;
  @Output() action=new EventEmitter();
  private numberofclick=0;

  item: Array<string>;
  public showConv;
  // We need use the ActivatedRoute object to get access
  // to information about the current route
  constructor(private activatedRoute: ActivatedRoute){

    // Get the query string value from our route
    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');
    console.log(JSON.parse(myArray));
    this.item=JSON.parse(myArray)
  }


}
