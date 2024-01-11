import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DefaultPageComponent } from './default/default-page/default-page.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from "./menu/menu.component";
import { SolComponent } from './pages/sol/sol.component';
import { PlanetasGasososComponent } from './pages/planetas-gasosos/planetas-gasosos.component';
import { PlanetasRochososComponent } from './pages/planetas-rochosos/planetas-rochosos.component';
import { TerraComponent } from './pages/terra/terra.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    SolComponent,
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
