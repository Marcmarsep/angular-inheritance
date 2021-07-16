import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../base-section.component";
import {SectionBService} from "../../../services/sections/section-b/section-b.service";

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.css']
})
export class SectionBComponent extends BaseSectionComponent implements OnInit {

  constructor(private service: SectionBService) {
    super(service);
  }

  ngOnInit(): void {
  }

}
