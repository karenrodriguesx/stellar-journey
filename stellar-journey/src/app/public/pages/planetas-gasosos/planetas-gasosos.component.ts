import { Component } from '@angular/core';
import { ContentItem } from '../../default/default-page/Icontent-item';
import { CONTENT_LIST } from './content-list';

@Component({
  selector: 'app-planetas-gasosos',
  templateUrl: './planetas-gasosos.component.html',
  styleUrls: ['./planetas-gasosos.component.css']
})
export class PlanetasGasososComponent {
  planetasGasososContent: ContentItem[] = <ContentItem[]>(CONTENT_LIST);
}
