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
  loading: boolean = false; // To show loading state

  constructor(private apiService: ApiService) {}

  // Method to handle the search query
  onSearch(): void {
    if (this.query.trim()) {
      this.loading = true;  // Set loading to true while fetching results
      this.apiService.searchItems(this.query).subscribe(
        (response: any) => {
          this.results = response.results;  // Store the results in the component
          this.loading = false;  // Set loading to false when done
        },
        (error: any) => {
          console.error('Error:', error);
          this.loading = false;  // Set loading to false if error occurs
        }
      );
    }
  }
}
