import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForRoutingModule } from './for-routing.module';
import { ForComponent } from './for.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [ForComponent],
  imports: [
    CommonModule,
    ForRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ]
})
export class ForModule { }
