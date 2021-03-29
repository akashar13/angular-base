import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongoComponent } from './mongo.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [

    {path:"songs",component:MongoComponent,data: {title: 'songs'}},
    {path:"player",component:PlayerComponent,data: {title:'player'}}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MongoRoutingModule { }
