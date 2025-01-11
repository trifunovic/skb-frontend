import { Component } from '@angular/core';

@Component({
  selector: 'app-item-form',
  standalone: false,  // Ensure this is set to standalone if using standalone components
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent {
  public item = { name: '', description: '' };

  constructor() { }

  onSubmit() {
    console.log('Form submitted', this.item);
  }
}
