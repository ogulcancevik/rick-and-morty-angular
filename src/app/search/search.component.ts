import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() SearchEvent = new EventEmitter<string>();
  name = '';
  search() {
    this.SearchEvent.emit(this.name);
  }
}
