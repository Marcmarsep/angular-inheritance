import {Injectable} from '@angular/core';
import {BaseSectionService} from "../base-section.service";

@Injectable({
  providedIn: 'root'
})
export class SectionAService extends BaseSectionService {

  constructor() {
    super();
  }
}
