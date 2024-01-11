import { Component, signal } from '@angular/core';
import { MenuItem } from './Tmenu-item';
import { LISTA_MENU } from './menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuList = signal<MenuItem[]>(LISTA_MENU)
}
