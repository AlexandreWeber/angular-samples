import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Data Binding', action: this.goToData.bind(this)
    },
    {
      label: 'Diretivas', action: this.goToDiretivas.bind(this)
    },
    {
      label: 'Serviços - Cep', action: this.goToZipCode.bind(this)
    },
    {
      label: 'Pipe', action: this.goToPipe.bind(this)
    },
    {
      label: 'Lifecycle', action: () => this.goTo('/lifecycle')
    }
  ];

  private goToZipCode() {
    this.router.navigate(['/zipCode']);
  }

  private goToData() {
    this.router.navigate(['/dataBinding']);
  }

  private goToDiretivas() {
    this.router.navigate(['/directives']);
  }

  private goToPipe() {
    this.router.navigate(['/pipe']);
  }

  private goTo(path: string) {
    this.router.navigate([path]);
  }
}
