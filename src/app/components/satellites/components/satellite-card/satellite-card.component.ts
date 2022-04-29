import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISatellite } from '../../models/ISatellite';

@Component({
  selector: 'app-satellite-card',
  templateUrl: './satellite-card.component.html',
  styleUrls: ['./satellite-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatelliteCardComponent implements OnInit {

  @Input() satellite: ISatellite;
  // public display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   this.display = true;
  // }

  onDescriptionChanged(newDescripton: string) {
    this.satellite.description = newDescripton;
  }

}
