import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  public isShowName = true;

  public isShowYellow = true;

  public name = 'Modernização Datasul';

  public frameworks: Array<any> = [
    { name: 'Angular', poSupport: false },
    { name: 'React', poSupport: false},
    { name: 'Vue', poSupport: false}
  ];

  public customer = {
    name: 'TOTVS',
    type: 178
  };

  constructor() { }

  ngOnInit() {
  }

  changeIsShowName() {
    this.isShowName = !this.isShowName;
  }

}
