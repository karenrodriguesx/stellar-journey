import { Component } from '@angular/core';
import { ContentItem } from '../../default/default-page/Icontent-item';
import { CONTENT_LIST } from './content-list';

@Component({
  selector: 'app-terra',
  templateUrl: './terra.component.html',
  styleUrls: ['./terra.component.css'],
})
export class TerraComponent {
  terraContent: ContentItem[] = <ContentItem[]>CONTENT_LIST;
}
