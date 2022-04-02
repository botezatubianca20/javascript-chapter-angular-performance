import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  {
    path: "satellites",
    loadChildren: () => import('./components/satellites/satellites.module').then(module => module.SatellitesModule),
  },
  {
    path: "equipments",
    component: EquipmentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
