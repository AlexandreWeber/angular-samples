import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IZipCode } from '../model/zip-code';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ZipCodeService {
    private lastZipCode = '';
    private baseUrl = 'https://viacep.com.br/ws/';

    constructor(private httpClient: HttpClient) {
      console.log('serviço criado')
     }

    public getZipCode(zipCode: string): Observable<IZipCode> {
      this.lastZipCode = zipCode;
      return this.httpClient.get<IZipCode>(`${this.baseUrl}/${zipCode}/json`);
    }

    public getLastZipCode(): string {
      return this.lastZipCode;
    }

}
