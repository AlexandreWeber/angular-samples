import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAllowedRoutingModule } from './not-allowed-routing.module';
import { NotAllowedComponent } from './not-allowed.component';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotAllowedComponent],
  imports: [
    CommonModule,
    PoModule,
    NotAllowedRoutingModule,
    FormsModule
  ]
})
export class NotAllowedModule { }
