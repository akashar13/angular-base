import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForComponent } from './for.component';

const routes: Routes = [
  {
    path:"form",component:ForComponent,
    data: {
      title: 'Form'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForRoutingModule { }
