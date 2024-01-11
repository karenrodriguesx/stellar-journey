import { Component } from '@angular/core';
import { ContentItem } from '../../default/default-page/Icontent-item';
import { CONTENT_LIST } from './content-list';

@Component({
  selector: 'app-sol',
  templateUrl: './sol.component.html',
  styleUrls: ['./sol.component.css'],
})
export class SolComponent {
  solContent: ContentItem[] = <ContentItem[]>CONTENT_LIST;
}
