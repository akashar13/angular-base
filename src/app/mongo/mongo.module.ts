import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule ,} from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { MongoRoutingModule } from './mongo-routing.module';
import { PlayerComponent } from './player/player.component';
// import { WidgetComponent } from './widget/widget.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [PlayerComponent,],
  imports: [
    CommonModule,
    MongoRoutingModule,

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
bootstrap: [],
schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class MongoModule

{}
