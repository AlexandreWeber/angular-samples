import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoDisclaimer } from '@portinari/portinari-ui';

import { TotvsResponse } from '../interfaces/totvs-response.interface';

import { IDepartment } from '../model/department.model';

@Injectable()
export class DepartmentService {

    private apiUrl = '/dts/datasul-rest/resources/prg/cgc/v1/department';

    constructor(private http: HttpClient) { }

    query(filters: PoDisclaimer[], page = 1, pageSize = 20): Observable<TotvsResponse<IDepartment>> {

        let url = `${this.apiUrl}?pageSize=${pageSize}&page=${page}`;

        if (filters && filters.length > 0) {

            const urlParams = new Array<string>();

            filters.map(filter => {
                urlParams.push(`${filter.property}=${filter.value}`);
            });

            url = `${url}&${urlParams.join('&')}`;
        }

        return this.http.get<TotvsResponse<IDepartment>>(url);
    }

    getById(id: number): Observable<IDepartment> {
        return this.http.get<IDepartment>(`${this.apiUrl}/${id}`);
    }

    create(model: IDepartment): Observable<IDepartment> {
        return this.http.post<IDepartment>(`${this.apiUrl}`, model);
    }

    update(model: IDepartment): Observable<IDepartment> {
        return this.http.put<IDepartment>(`${this.apiUrl}/${model.id}`, model);
    }

    delete(id: number): Observable<object> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

}
