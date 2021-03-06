import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Temas Específicos', action: () => this.goTo('/subjects')
    },
    {
      label: 'Módulos', action: () => this.goTo('/lazy')
    },
    {
      label: 'Data Binding', action: () => this.goTo('/dataBinding')
    },
    {
      label: 'Diretivas', action: () => this.goTo('/directives')
    },
    {
      label: 'Serviços', action: () => this.goTo('/zipCode')
    },
    {
      label: 'Pipe', action: () => this.goTo('/pipe')
    },
    {
      label: 'Lifecycle', action: () => this.goTo('/lifecycle')
    },
    {
      label: 'Formulário Reativo', action: () => this.goTo('/reactiveForm')
    },
    {
      label: 'Components', action: () => this.goTo('/components')
    },
    {
      label: 'Departamento', action: () => this.goTo('/department')
    }
  ];

  private goTo(path: string) {
    this.router.navigate([path]);
  }
}
