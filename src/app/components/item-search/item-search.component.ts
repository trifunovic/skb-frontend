import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss'],
  standalone: false
})
export class ItemSearchComponent {
  query: string = '';  // The search query entered by the user
  results: any[] = []; // To store search results

  constructor(private apiService: ApiService) {}

  // Method to handle the search query
  onSearch(): void {
    if (this.query.trim()) {
      this.apiService.searchItems(this.query).subscribe(
        (response) => {
          this.results = response;  // Store the results in the component
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
