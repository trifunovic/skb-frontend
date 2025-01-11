import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-list',
  standalone : false,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.apiService.getItem(1).subscribe(response => {
      this.items.push(response);
    });
  }
}
