import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.config';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${API_CONFIG.baseUrl}/customer`);
  }
  create(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${API_CONFIG.baseUrl}/customer`, customer);
  }
}
