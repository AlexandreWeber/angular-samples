import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoDisclaimer } from '@portinari/portinari-ui';

import { TotvsResponse } from '../interfaces/totvs-response.interface';

import { IAction } from '../model/action.model';

@Injectable()
export class ActionService {

    // FIXME: Change to the backend service URL
    private apiUrl = '/dts/datasul-rest/resources/prg/cgc/v1/department';

    constructor(private http: HttpClient) { }

    query(filters: PoDisclaimer[], page = 1, pageSize = 20): Observable<TotvsResponse<IAction>> {

        let url: string = `${this.apiUrl}?pageSize=${pageSize}&page=${page}`;

        if (filters && filters.length > 0) {

            const urlParams = new Array<String>();

            filters.map(filter => {
                urlParams.push(`${filter.property}=${filter.value}`);
            });

            url = `${url}&${urlParams.join('&')}`;
        }

        return this.http.get<TotvsResponse<IAction>>(url);
    }

    getById(id: number): Observable<IAction> {
        return this.http.get<IAction>(`${this.apiUrl}/${id}`);
    }

    create(model: IAction): Observable<IAction> {
        return this.http.post<IAction>(`${this.apiUrl}`, model);
    }

    update(model: IAction): Observable<IAction> {
        return this.http.put<IAction>(`${this.apiUrl}/${model.id}`, model);
    }

    delete(id: number): Observable<Object> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

}
