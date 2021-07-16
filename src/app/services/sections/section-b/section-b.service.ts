import {Injectable} from '@angular/core';
import {BaseSectionService} from "../base-section.service";

@Injectable({
  providedIn: 'root'
})
export class SectionBService extends BaseSectionService {

  constructor( ) {
    super();
  }
}
