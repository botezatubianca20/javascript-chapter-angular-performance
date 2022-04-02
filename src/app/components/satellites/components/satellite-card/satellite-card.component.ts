import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISatellite } from '../../models/ISatellite';

@Component({
  selector: 'app-satellite-card',
  templateUrl: './satellite-card.component.html',
  styleUrls: ['./satellite-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatelliteCardComponent implements OnInit {

  @Input() satellite: ISatellite;
  constructor() { }

  ngOnInit(): void {
  }

  onDescriptionChanged(newDescripton: string) {
    this.satellite.description = newDescripton;
  }

}
