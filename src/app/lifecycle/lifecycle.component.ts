import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  constructor(public notification: PoNotificationService) { }

  ngOnInit() {
    this.notification.success('Init');
  }

  ngOnDestroy() {
    this.notification.success('Destroy');
  }

  ngOnChanges() {
    this.notification.success('Changes');
  }

  ngAfterViewInit() {
    this.notification.success('AfterViewInit');
  }

}
