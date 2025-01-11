import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';  // FastAPI backend URL

  constructor(private http: HttpClient) {}

  // Example POST request
  createItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/items/`, item);
  }

  // Example GET request
  getItem(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/${id}`);
  }
}
