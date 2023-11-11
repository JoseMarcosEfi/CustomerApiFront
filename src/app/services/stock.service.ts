import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from '../config/api.config';
import { Stock } from '../models/stock';

@Injectable({
    providedIn: 'root'
})
export class StockService {

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<Stock> {
        return this.http.get<Stock>(`${API_CONFIG.baseUrl}/stock/${id}`);
    }


    findAll(): Observable<Stock[]> {
        return this.http.get<Stock[]>(`${API_CONFIG.baseUrl}/stock`);
    }
    create(stock: Stock): Observable<Stock> {
        return this.http.post<Stock>(`${API_CONFIG.baseUrl}/stock`, stock);
    }

    update(stock: Stock): Observable<Stock> {
        return this.http.put<Stock>(`${API_CONFIG.baseUrl}/stock/${stock.id}`, stock);
    }
    delete(id: any): Observable<Stock> {
        return this.http.delete<Stock>(`${API_CONFIG.baseUrl}/stock/${id}`);
    }

    //isDescriptionDuplicate(description: string): Observable<boolean> {
    //  return this.http.get<Stock[]>(`${API_CONFIG.baseUrl}/?description/${encodeURIComponent(description)}`)
    //    .pipe(
    //      map((stocks) => stocks.length > 0)
    //);
    //}



}
