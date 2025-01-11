import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
  standalone: false
})
export class ItemFormComponent {
  item = {
    id: '',
    content: '',
    metadata: {
      author: '',
      category: ''
    }
  };

  constructor(private apiService: ApiService) {}

  // Method to handle form submission
  onSubmit(): void {
    this.apiService.createItem(this.item).subscribe(
      (response) => {
        console.log('Item created:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
