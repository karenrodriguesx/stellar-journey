import { Component, Input } from '@angular/core';
import { ContentItem } from './Icontent-item';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent {
  @Input() banner : string = '';
  @Input() contentList: ContentItem[] = [];
}
