import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComediaComponent } from './components/comedia/comedia.component';
import { RomanceComponent } from './components/romance/romance.component';
import { TerrorComponent } from './components/terror/terror.component';

const routes: Routes = [
  {
    path: 'comedia',
    component: ComediaComponent
  },
  {
    path: 'romance',
    component: RomanceComponent
  },
  {
    path: 'terror',
    component: TerrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
