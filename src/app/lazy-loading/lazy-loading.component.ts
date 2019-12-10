import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {

  module = {
    imports: [
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
