import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SatellitesListComponent } from './components/satellites-list/satellites-list.component';


const routes: Routes = [
  {
    path: "",
    component: SatellitesListComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class SatellitesRoutingModule {



}
