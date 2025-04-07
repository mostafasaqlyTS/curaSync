import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [ FormsModule]
})
export class SearchComponent {
  searchQuery: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(): void {
    if (this.searchQuery.trim()) { // Added validation to avoid emitting empty queries
      this.searchEvent.emit(this.searchQuery);
    }
  }
}
