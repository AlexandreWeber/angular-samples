import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  themes: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.setUpComponents();
  }

  setUpComponents() {
    this.themes = [
      { name: 'Javascript', done: false },
      { name: 'Dicas VisualCode', done: false},
      { name: 'Angular CLI', done: false },
      { name: 'Data Binding', done: false },
      { name: 'Diretivas', done: false },
      { name: 'Pipe', done: false },
      { name: 'Tradução', done: false },
      { name: 'Serviços', done: false },
      { name: 'Ciclo de Vida', done: false },
      { name: 'Formulário Reativo', done: false },
      { name: 'Componentes', done: false },
      { name: 'Gerador de CRUD', done: false }
    ];

    const themesLocalStorage = this.getFromLocalStorage();

    if (themesLocalStorage) {
      this.themes = JSON.parse(window.localStorage.getItem('themes'));
    }
  }

  save(theme: any) {
    const index = this.themes.findIndex(t => t.name === theme.name);
    this.themes[index].done = this.themes[index].done ? true : false;

    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    window.localStorage.setItem('themes', JSON.stringify(this.themes));
  }

  getFromLocalStorage(): Array<any> {
    return JSON.parse(window.localStorage.getItem('themes'));
  }

}
