import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentEditComponent } from './edit/department.edit.component';
import { DepartmentListComponent } from './department.list.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: DepartmentListComponent,
    },
    {
        path: 'new',
        component: DepartmentEditComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'edit/:id',
        component: DepartmentEditComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DepartmentRoutingModule { }
