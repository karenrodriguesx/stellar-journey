import { Component, signal } from '@angular/core';
import { ContentItem } from './Icontent-item';
import { CONTENT_LIST } from './content-list';

@Component({
  selector: 'app-planetas-rochosos',
  templateUrl: './planetas-rochosos.component.html',
  styleUrls: ['./planetas-rochosos.component.css'],
})
export class PlanetasRochososComponent {
  contentList = <ContentItem[]>(CONTENT_LIST);
}
