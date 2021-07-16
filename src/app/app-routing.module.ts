import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SectionAComponent} from "./components/sections/section-a/section-a.component";
import {SectionBComponent} from "./components/sections/section-b/section-b.component";

const routes: Routes = [
  {
    path: 'section-a',
    component: SectionAComponent
  }, {
    path: 'section-b',
    component: SectionBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


12.0
