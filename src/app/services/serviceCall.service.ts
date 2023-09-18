import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.config';
import { ServiceCall } from '../models/serviceCall';

@Injectable({
    providedIn: 'root'
})
export class ServiceCallService {

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<ServiceCall> {
        return this.http.get<ServiceCall>(`${API_CONFIG.baseUrl}/serviceCall/${id}`);
    }


    findAll(): Observable<ServiceCall[]> {
        return this.http.get<ServiceCall[]>(`${API_CONFIG.baseUrl}/serviceCall`);
    }
    create(sCall: ServiceCall): Observable<ServiceCall> {
        return this.http.post<ServiceCall>(`${API_CONFIG.baseUrl}/serviceCall`, sCall);
    }

    update(sCall: ServiceCall): Observable<ServiceCall> {
        return this.http.put<ServiceCall>(`${API_CONFIG.baseUrl}/serviceCall/${sCall.id}`, sCall);
    }
    delete(id: any): Observable<ServiceCall> {
        return this.http.delete<ServiceCall>(`${API_CONFIG.baseUrl}/serviceCall/${id}`);
    }
}
