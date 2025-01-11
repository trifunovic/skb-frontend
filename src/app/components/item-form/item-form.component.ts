import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-form',
  standalone : false,
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent {
  item = { name: '', description: '' };

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    this.apiService.createItem(this.item).subscribe((response) => {
      console.log('Item created:', response);
    });
  }
}
