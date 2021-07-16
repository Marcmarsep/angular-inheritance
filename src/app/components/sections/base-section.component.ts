import {Component, OnInit} from '@angular/core';
import {BaseSectionService} from "../../services/sections/base-section.service";
import {BaseDataset} from "../../models/dataset";


@Component({
  selector: 'app-base-section',
  templateUrl: './base-section.component.html',
  styleUrls: ['./base-section.component.css']
})
export class BaseSectionComponent implements OnInit {
  dataset!: BaseDataset;

  constructor(service: BaseSectionService) {
  }

  ngOnInit(): void {
  }

}
