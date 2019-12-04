import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@portinari/portinari-ui';
import { DataBindingComponent } from './data-binding.component';
import { DataBindingRoutingModule } from './data-binding-routing.module';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    DataBindingRoutingModule,
    FormsModule,
  ]
})
export class DataBindingModule { }
