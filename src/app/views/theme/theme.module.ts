// Angular
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { TableComponent } from '../../table/table.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,


  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,

  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class ThemeModule { }
