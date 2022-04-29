import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SatellitesListComponent } from './components/satellites-list/satellites-list.component';
import { MatCardModule } from "@angular/material/card";
import { SatellitesRoutingModule } from './satellites-routing.module';
import { SatelliteCardComponent } from './components/satellite-card/satellite-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SatellitesListComponent,
    SatelliteCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SatellitesRoutingModule,
    FlexLayoutModule,
  ]
})
export class SatellitesModule { }
