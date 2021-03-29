import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '../../table/table.component';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';


const routes: Routes = [
  
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path:'table',
        component:TableComponent,
        data: {
          title: 'table'
        }
      }
    
      ,
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
