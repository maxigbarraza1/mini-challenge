import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NuevaPersonaComponent } from './nueva-persona/nueva-persona.component';

const routes: Routes = [
    { path: 'inicio', component: HomeComponent},
    { path: 'nueva-persona', component: NuevaPersonaComponent},
    { path: '**', redirectTo: 'inicio'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
