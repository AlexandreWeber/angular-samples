import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  selectedUser: any;

  users = [
    {
      code: 1,
      name: 'Alexandre Weber Dalabona',
      email: 'alexandre.dalabona@totvs.com.br',
      establishment: '1 - TOTVS',
      active: true,
      dateCreated: '2019-01-01'
    },
    {
      code: 2,
      name: 'João da Silva',
      email: 'joao.silva@totvs.com.br',
      establishment: '2 - São Paulo',
      active: false,
      dateCreated: '2019-06-06'

    },
    {
      code: 3,
      name: 'Marcio Soares',
      email: 'marcio.soares@fluig.com',
      establishment: '3 - Fluig',
      active: true,
      dateCreated: '2019-10-10'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  userSelected(user) {
    this.selectedUser = user;
  }

  getSelectedUserName() {
    return this.selectedUser ? this.selectedUser.name : 'Nenhum usuário selecionado';
  }
}
