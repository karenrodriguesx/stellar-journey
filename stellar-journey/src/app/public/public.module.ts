import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DefaultPageComponent } from './default/default-page/default-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { LuasComponent } from './pages/luas/luas.component';
import { PlanetasGasososComponent } from './pages/planetas-gasosos/planetas-gasosos.component';
import { PlanetasRochososComponent } from './pages/planetas-rochosos/planetas-rochosos.component';
import { TerraComponent } from './pages/terra/terra.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    LuasComponent,
    PlanetasRochososComponent,
    PlanetasGasososComponent,
    TerraComponent,
    FooterComponent,
    DefaultPageComponent
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    HomeComponent
  ]
})
export class PublicModule {
}
