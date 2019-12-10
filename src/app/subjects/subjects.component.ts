// tslint:disable: max-line-length
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  themes: Array<any> = [];

  texts = {};

  challengeText = '';

  @ViewChild('challengeModal', { static: true}) challengeModal: PoModalComponent;

  constructor() { }

  ngOnInit() {
    this.setUpComponents();
  }

  setUpComponents() {

    this.texts = {
      AngularCLI: `- Criar uma nova aplicação com routing usando o ng new project-name\n- Nesse novo projeto criar um novo componente usando o ng g m --routing e ng g c`,
      Diretivas: 'Criar uma diretiva que quando adicionada a um componente mude a cor do texto para verde',
      Pipe: 'Criar um PIPE que irá formatar a descrição da origem do pedido conforme os valores abaixo:\n1 Normal\n2 Tele Pedido\n3 Configurado\n4 Batch\n5 Exportação\n6 EDI\n7 Multiplanta\n8 Cotação\n9 Bonificação\n10 Portal Datasul\n11 SFA\n12 WEB\n13 B2B\n14 CRM',
      Serviços: 'Criar um serviço que irá consumir a API https://api.punkapi.com/v2/beers/random\nEssa api irá retornar uma cerveja aleatória\nOs detalhes da cerveja devem ser apresentados em tela de forma amigável (use a imaginação)',
      FormulárioReativo: 'Crie um novo componente com um formulário reativo para cadastro de usuários (nome, email e observação), \nO nome deve ser obrigatório e conter no mínimo 5 carcteres.\nO e-mail deve possuir um email válido e deve ser um email @totvs (criar validador customizado)',
      Componentes: 'Crie um componente que irá exibir as informaçãoes básicas de um cliente\nEsse componente deverá estar preparado para ser utilizado em outros componentes, ele deve receber um objeto com os dados do cliente\n',
      GeradorCRUD: 'Criar um CRUD para o cadastro de profissão CRM, será usado o gerador porém será necessário incluir dois novos campos:\n-Código Receita Federal (srfCode)\n-Descrição (description)\n\nPara isso deve ser configurado um proxy que direcione as chamadas para o gales:8180\nA API de profissão é dts/datasul-rest/resources/prg/cgc/v1/profession '
    };

    this.themes = [
      { name: 'JavaScript', done: false, hasChallenge: false },
      { name: 'TypeScript', done: false, hasChallenge: false },
      { name: 'Debugando a aplicação', done: false, hasChallenge: false },
      { name: 'Dicas VisualCode', done: false, hasChallenge: false },
      { name: 'Angular CLI', done: false, hasChallenge: true },
      { name: 'Data Binding', done: false, hasChallenge: false },
      { name: 'Diretivas', done: false, hasChallenge: true },
      { name: 'Pipe', done: false, hasChallenge: true },
      { name: 'Tradução', done: false, hasChallenge: false },
      { name: 'Serviços', done: false, hasChallenge: true },
      { name: 'Ciclo de Vida', done: false, hasChallenge: false },
      { name: 'Formulário Reativo', done: false, hasChallenge: true },
      { name: 'Componentes', done: false, hasChallenge: true },
      { name: 'Gerador CRUD', done: false, hasChallenge: true }
    ];

    const themesLocalStorage = this.getFromLocalStorage();

    if (themesLocalStorage) {
      themesLocalStorage.map((theme) => {
        this.themes.map((t) => {
          if (t.name === theme.name) {
            t.done = theme.done;
          }
        });
      });
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

  openTask(name: string) {
    this.challengeText = this.texts[name.replace(' ', '')];
    this.challengeModal.open();
  }

}
