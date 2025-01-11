import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';  // Your FastAPI backend URL

  constructor(private http: HttpClient) {}

  // Fetch all items (GET request)
  getItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/items/`);
  }

  // Create a new item (POST request)
  createItem(item: { name: string, description?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/items/`, item);
  }
}
