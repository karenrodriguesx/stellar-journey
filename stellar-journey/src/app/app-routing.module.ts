import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetasGasososComponent } from './public/pages/planetas-gasosos/planetas-gasosos.component';
import { PlanetasRochososComponent } from './public/pages/planetas-rochosos/planetas-rochosos.component';
import { PublicComponent } from './public/public.component';
import { LuasComponent } from './public/pages/luas/luas.component';
import { TerraComponent } from './public/pages/terra/terra.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'planetas-rochosos', component: PlanetasRochososComponent },
  { path: 'planetas-gasosos', component: PlanetasGasososComponent },
  { path: 'luas', component: LuasComponent },
  { path: 'terra', component: TerraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
