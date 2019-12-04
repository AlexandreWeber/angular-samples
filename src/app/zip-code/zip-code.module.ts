import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZipcodeComponent } from './zip-code.component';
import { ZipCodeRoutingModule } from './zip-code-routing.module';
import { ZipCodeService } from '../shared/services/zip-code.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [ZipcodeComponent],
  imports: [
    PoModule,
    CommonModule,
    ZipCodeRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ZipCodeService
  ]
})
export class ZipcodeModule { }
