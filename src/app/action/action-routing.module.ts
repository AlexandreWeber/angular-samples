import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionEditComponent } from './edit/action.edit.component';
import { ActionListComponent } from './action.list.component';

const routes: Routes = [
    {
        path: '',
        component: ActionListComponent,
    },
    {
        path: 'new',
        component: ActionEditComponent
    },
    {
        path: 'edit/:id',
        component: ActionEditComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActionRoutingModule { }
