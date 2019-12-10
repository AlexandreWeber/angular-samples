import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    LazyLoadingRoutingModule
  ],
  exports: [

  ],
  providers: [

  ]
})
export class LazyLoadingModule { }
