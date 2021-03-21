import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ComediaComponent } from './comedia/comedia.component';
import {  TerrorComponent} from './terror/terror.component';
import {  RomanceComponent} from './romance/romance.component';




@NgModule({
  declarations: [ComediaComponent, TerrorComponent, RomanceComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports:[ComediaComponent, TerrorComponent, RomanceComponent]
})
export class ComponentsModule { }
