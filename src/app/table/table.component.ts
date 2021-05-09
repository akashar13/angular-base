import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { isWhiteSpaceLike, reduceEachLeadingCommentRange } from 'typescript';
import { TableService } from './table.service';
import {PaginatePipe} from 'ngx-pagination'
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [

  ]
})


export class TableComponent implements OnInit {

  public employees=[];
 public color="red";
 public bg={
   backgroundColor:"#ccc8be",
   fontWeight:"Bolder",

  };
  public hedbg={
    backgroundColor:"#a6e6ff",
    fontWeight:"Lighter"

   };
   public hedcol={
     color:"white",
   };
   public tabcol={
     backgroundColor:"white",


   }

//   public data : any =[
//     {id: 1, name:'Superman', Dept:"CSE"},
//     {id: 2, name:'Batman',Dept:"ECE"},
//     {id: 5, name:'BatGirl',Dept:"MECH"},
//     {id: 3, name:'Robin',Dept:"CIVIL"},
//     {id: 4, name:'Flash',Dept:"CSE"}
// ];
  constructor(private _table:TableService) {

  }

  ngOnInit(): void {
    this._table.getemployees().subscribe((data=> {this.employees=data,
    console.log(data)

    }));

  }
  derow(iaa)



      {
        let i=iaa;
        this.employees.splice(i,1);
      }




  }
