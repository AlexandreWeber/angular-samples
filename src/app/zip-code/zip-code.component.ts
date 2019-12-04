import { Component } from '@angular/core';
import { IZipCode } from '../shared/model/zip-code';
import { ZipCodeService } from '../shared/services/zip-code.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss']
})
export class ZipcodeComponent  {

  public zipCode: Array<IZipCode>;

  public value: string;

  constructor(public cepService: ZipCodeService) {}

  getCep() {
    this.cepService.getZipCode(this.value)
                   .subscribe((zipCode: IZipCode) => {
        this.zipCode = [zipCode];
    });
  }

}
