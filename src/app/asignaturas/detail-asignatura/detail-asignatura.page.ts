import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura} from '../asignaturas.model'
import { AsignaturaService } from '../asignaturas.service';


@Component({
  selector: 'app-detail-asignatura',
  templateUrl: './detail-asignatura.page.html',
  styleUrls: ['./detail-asignatura.page.scss'],
})
export class DetailAsignaturaPage implements OnInit {
asignatura: Asignatura;

  constructor(private activateRoute: ActivatedRoute, 
    private asignaturaService: AsignaturaService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idAsignaturaRecibido=paramMap.get('asignaturaId');
        this.asignatura=this.asignaturaService.getAsignatura(idAsignaturaRecibido);
      }
    );
  }

}
