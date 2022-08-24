import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPersonaComponent } from './tabla-persona/tabla-persona.component';
import { MaterialModule } from '../material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaPersonaComponent,
    NavBarComponent,
    FormPersonaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TablaPersonaComponent,
    NavBarComponent,
    FormPersonaComponent,
  ]
})
export class ComponentsModule { }
