import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { LifecycleComponent } from './lifecycle.component';

import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [LifecycleComponent],
  imports: [
    CommonModule,
    PoModule,
    LifecycleRoutingModule
  ]
})
export class LifecycleModule { }
