import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: '',
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
