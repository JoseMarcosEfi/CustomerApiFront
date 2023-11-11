import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.config';
import { Billing } from '../models/billing';

@Injectable({
    providedIn: 'root'
})
export class BillingService {

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<Billing> {
        return this.http.get<Billing>(`${API_CONFIG.baseUrl}/billings/${id}`);
    }


    findAll(): Observable<Billing[]> {
        return this.http.get<Billing[]>(`${API_CONFIG.baseUrl}/billings`);
    }
    create(billing: Billing): Observable<Billing> {
        return this.http.post<Billing>(`${API_CONFIG.baseUrl}/billings`, billing);
    }

    delete(id: any): Observable<Billing> {
        return this.http.delete<Billing>(`${API_CONFIG.baseUrl}/billings/${id}`);
    }

}
