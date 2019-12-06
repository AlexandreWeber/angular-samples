import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PoModule, PoI18nPipe } from '@portinari/portinari-ui';

import { DepartmentService } from '../shared/services/department.service';
import { DepartmentEditComponent } from './edit/department.edit.component';
import { DepartmentListComponent } from './department.list.component';
import { DepartmentRoutingModule } from './department-routing.module';

import { LoadingInterceptorModule } from '../loading-interceptor.module';
import { AuthGuardService } from '../shared/guards/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        LoadingInterceptorModule,
        PoModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DepartmentRoutingModule
    ],
    declarations: [
        DepartmentListComponent,
        DepartmentEditComponent
    ],
    exports: [
        DepartmentListComponent
    ],
    providers: [
        PoI18nPipe,
        DepartmentService,
        AuthGuardService
    ],
})
export class DepartmentModule { }

