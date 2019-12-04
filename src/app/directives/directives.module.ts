import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../shared/directives/highlight.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    PoModule,
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
  ]
})
export class DirectivesModule { }
