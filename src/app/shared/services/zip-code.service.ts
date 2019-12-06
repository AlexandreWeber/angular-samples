import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IZipCode } from '../model/zip-code';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ZipCodeService {
  private lastZipCode = '';

  private baseUrl = 'https://viacep.com.br/ws';

  constructor(private httpClient: HttpClient) {
    console.log('serviço criado');
  }

  public getZipCode(zipCode: string): Observable<IZipCode> {
    this.lastZipCode = zipCode;
    return this.httpClient
               .get<IZipCode>(`${this.baseUrl}/${zipCode}/json`)
               .pipe(map((zip) => {
                  zip.bairro += ' Alterado';
                  return zip;
               }));
  }

  public getLastZipCode(): string {
    return this.lastZipCode;
  }

}
