import {Injectable} from '@angular/core';
import {LibraryService} from "./library.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private service: LibraryService) {
  }
}
