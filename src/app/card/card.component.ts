import { Component, Input } from '@angular/core';
import { Result } from 'src/types/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() result = {} as Result;
  dotClass(status: string) {
    return {
      'bg-green-500': status === 'Alive',
      'bg-red-500': status === 'Dead',
      'bg-gray-500': status === 'unknown',
    };
  }
}
