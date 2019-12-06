import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { PoModule } from '@portinari/portinari-ui';
import { UserInfoComponent } from '../shared/components/user-info/user-info.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
