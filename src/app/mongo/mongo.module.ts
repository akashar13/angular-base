import { NgModule ,} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MongoRoutingModule } from './mongo-routing.module';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [PlayerComponent,],
  imports: [
    CommonModule,
    MongoRoutingModule,

  ],
  providers: [],
bootstrap: []

})
export class MongoModule
{}

