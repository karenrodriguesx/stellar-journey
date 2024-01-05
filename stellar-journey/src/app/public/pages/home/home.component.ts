import { Component } from '@angular/core';
import { CONTENT_LIST } from './content-list';
import { ContentItem } from '../../default/default-page/Icontent-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  contentList = <ContentItem[]>CONTENT_LIST;
}
