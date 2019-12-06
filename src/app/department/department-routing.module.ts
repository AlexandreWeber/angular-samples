import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentEditComponent } from './edit/department.edit.component';
import { DepartmentListComponent } from './department.list.component';

const routes: Routes = [
    {
        path: '',
        component: DepartmentListComponent,
    },
    {
        path: 'new',
        component: DepartmentEditComponent
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
