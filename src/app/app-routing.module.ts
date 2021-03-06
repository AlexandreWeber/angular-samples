import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@portinari/portinari-templates';

const routes: Routes = [
  {
    path: 'zipCode',
    loadChildren: () => import('./zip-code/zip-code.module').then(m => m.ZipcodeModule)
  },
  {
    path: 'dataBinding',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then(m => m.PipeModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'lifecycle',
    loadChildren: () => import('./lifecycle/lifecycle.module').then(m => m.LifecycleModule)
  },
  {
    path: 'reactiveForm',
    loadChildren: () => import('./reactive-forms/reactive-forms.module').then(m => m.ReactiveFormModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'accessDenied',
    component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.portinari@portinari.com',
      contactPhone: '0800 1234 000',
      reason: 'Você não possui acesso',
      urlBack: ''
    }
  },
  {
    path: 'notAllowed',
    loadChildren: () => import('./not-allowed/not-allowed.module').then(m => m.NotAllowedModule)
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
  },
  {
    path: '',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
