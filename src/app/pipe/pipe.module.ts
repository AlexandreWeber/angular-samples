import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeRoutingModule } from './pipe-routing.module';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe.component';
import { SexPipe } from '../shared/pipes/sex.pipe';

@NgModule({
  declarations: [
    PipeComponent,
    SexPipe
  ],
  imports: [
    PoModule,
    CommonModule,
    PipeRoutingModule,
    FormsModule
  ]
})
export class PipeModule { }
