import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from '../../models/persona.model';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.sass']
})
export class TablaPersonaComponent implements AfterViewInit{

  displayedColumns: string[] = ['nombre', 'edad', 'carrera', 'hobbie'];
  dataSource: MatTableDataSource<Persona>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private personaService: PersonaService) {
    this.dataSource = new MatTableDataSource(this.personaService.getAll());
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator;
  }

}
