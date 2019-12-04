import { Component, OnInit } from '@angular/core';
import { IZipCode } from '../shared/model/zip-code';
import { ZipCodeService } from '../shared/services/zip-code.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss']
})
export class ZipcodeComponent implements OnInit  {

  private lastZipCode = '';

  public zipCode: Array<IZipCode>;

  public value: string;

  constructor(public cepService: ZipCodeService) {}

  ngOnInit() {
    this.lastZipCode = this.cepService.getLastZipCode();
  }

  getCep() {
    this.cepService.getZipCode(this.value)
                   .subscribe((zipCode: IZipCode) => {
        this.zipCode = [zipCode];
        this.lastZipCode = this.cepService.getLastZipCode();
    });
  }

}
