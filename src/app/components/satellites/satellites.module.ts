import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SatellitesListComponent } from './components/satellites-list/satellites-list.component';
import { EquipmentListComponent } from '../equipment-list/equipment-list.component';
import { MatCardModule } from "@angular/material/card";
import { SatellitesRoutingModule } from './satellites-routing.module';
import { SatelliteCardComponent } from './components/satellite-card/satellite-card.component';




@NgModule({
  declarations: [
    SatellitesListComponent,
    EquipmentListComponent,
    SatelliteCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SatellitesRoutingModule
  ]
})
export class SatellitesModule { }
