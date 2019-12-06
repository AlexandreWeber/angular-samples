import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef } from '@angular/core';

import { PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

  @Input() user: any;

  @Input() selectedUser: any;

  @Output() onUserSelected = new EventEmitter();

  constructor(private poNotificationService: PoNotificationService) { }

  ngOnInit() { }

  getStatusText() {
    return this.user.active ? 'Ativo' : 'Inativo';
  }

  getStatusColor() {
    return this.user.active ? 'color-01' : 'color-07';
  }

  userSelected() {
    const { name } = this.user;
    this.onUserSelected.emit(this.user);
    this.poNotificationService.information(`Usuário ${name} selecionado ;)`);
  }
}
