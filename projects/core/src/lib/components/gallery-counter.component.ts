import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GalleryState } from '../models/gallery.model';

@Component({
  selector: 'gallery-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="g-counter">{{(state && state.items ? (state.currIndex + 1) + '/' + state.items.length : '0/0'}}</div>
  `
})
export class GalleryCounterComponent {
  @Input() state: GalleryState;
}
