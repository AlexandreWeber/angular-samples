import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PoI18nService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  literals: any = {};

  public birthday = new Date(1988, 3, 15);

  constructor(private poI18nService: PoI18nService) { }

  ngOnInit(): void {
    forkJoin(
        this.poI18nService.getLiterals(),
        this.poI18nService.getLiterals({ context: 'action' })
    ).subscribe(literals => {
        literals.map(item => Object.assign(this.literals, item));
    });
}

}
