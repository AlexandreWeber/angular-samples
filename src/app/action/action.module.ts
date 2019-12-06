import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PoModule, PoI18nPipe } from '@portinari/portinari-ui';

import { ActionService } from '../shared/services/action.service';
import { ActionEditComponent } from './edit/action.edit.component';
import { ActionListComponent } from './action.list.component';
import { ActionRoutingModule } from './action-routing.module';
import { LoadingInterceptorModule } from '../loading-interceptor.module';

@NgModule({
    imports: [
        CommonModule,
        LoadingInterceptorModule,
        PoModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ActionRoutingModule
    ],
    declarations: [
        ActionListComponent,
        ActionEditComponent
    ],
    exports: [
        ActionListComponent
    ],
    providers: [
        PoI18nPipe,
        ActionService
    ],
})
export class ActionModule { }

