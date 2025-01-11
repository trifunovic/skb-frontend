import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8080';  // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createItem(item: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-document/`, item);  // POST to add document
  }

  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/`);
  }

  searchItems(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/`, {
      headers: {
        Authorization: 'my-secure-api-key',  // Replace with your actual API key
        'accept': 'application/json'
      },
      params: {
        query: query  // Send the search query as a URL parameter
      }
    });
  }
}
