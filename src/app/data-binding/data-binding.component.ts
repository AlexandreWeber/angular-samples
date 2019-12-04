import { Component, OnInit } from '@angular/core';
import { PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public name = 'Modernização DATASUL';

  constructor(public poNotification: PoNotificationService) { }

  ngOnInit() {
    console.log(this.name);
  }

  showName() {
    this.poNotification.success(this.name);
  }

  changeName() {
    this.name += ' Alterado';
  }

}
