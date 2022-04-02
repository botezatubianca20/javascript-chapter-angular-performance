import { Component, OnInit } from '@angular/core';
import { SATELLITES } from 'src/app/db-data';
import { ISatellite } from '../../models/ISatellite';

@Component({
  selector: 'app-satellites-list',
  templateUrl: './satellites-list.component.html',
  styleUrls: ['./satellites-list.component.scss'],
})
export class SatellitesListComponent implements OnInit {

  satellites: ISatellite[] = SATELLITES;

  constructor() { }

  ngOnInit(): void {

  }

  editSatellite() {
    this.satellites[0].description = "test description";

    // const satellite = this.satellites[0];
    // const newSatellite = { ...satellite };
    // newSatellite.description = "test descr";
    // this.satellites[0] = newSatellite;
  }



}
