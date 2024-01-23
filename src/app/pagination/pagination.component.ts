import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Info } from 'src/types/characters';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() dataInfo = {} as Info;
  @Output() changePageEvent = new EventEmitter<number>();
  pagesArray = [] as number[];
  selectedPage = 0

  changePage(): void {
    this.changePageEvent.emit(Number(this.selectedPage) + 1);
  }

  ngOnInit(): void {
    const { pages } = this.dataInfo;
    this.pagesArray = Array.from(Array(pages).keys());
  }
}
