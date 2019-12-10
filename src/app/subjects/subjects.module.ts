import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';

import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
