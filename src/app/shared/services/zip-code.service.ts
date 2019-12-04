import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IZipCode } from '../model/zip-code';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ZipCodeService {
    private baseUrl = 'https://viacep.com.br/ws/';

    constructor(private httpClient: HttpClient) { }

    public getZipCode(zipCode: string): Observable<IZipCode> {
      return this.httpClient.get<IZipCode>(`${this.baseUrl}/${zipCode}/json`);
    }
}
