import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EQUIPMENTS } from 'src/app/db-data';
import { IEquipment } from '../../models/IEquipment';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipments: IEquipment[] = EQUIPMENTS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  addEquipment() {
    console.log("add equipment");
    const maxId = this.equipments.reduce(
      (max, equipment) => (equipment.id > max ? equipment.id : max),
      this.equipments[0].id
    );
    this.equipments = this.equipments.concat([{ id: maxId + 1, description: "New equipment" }]);
  }

  replaceList() {
    this.equipments = EQUIPMENTS;
  }

  equipmentTrackBy(index: number, equipment: IEquipment) {
    return equipment.id;
  }


}
