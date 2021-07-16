import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../base-section.component";
import {SectionAService} from "../../../services/sections/section-a/section-a.service";

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.css']
})
export class SectionAComponent extends BaseSectionComponent implements OnInit {

  constructor(private service: SectionAService) {
    super(service);
  }

  ngOnInit(): void {

  }

}
