import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura} from '../asignaturas.model'
import { DetailAsignaturaService } from 'src/app/servicios/detail-asignatura.service';


@Component({
  selector: 'app-detail-asignatura',
  templateUrl: './detail-asignatura.page.html',
  styleUrls: ['./detail-asignatura.page.scss'],
})
export class DetailAsignaturaPage implements OnInit {
  public info: Array<any> = []

  constructor(private activateRoute: ActivatedRoute, 
    private detailasignaturaService:DetailAsignaturaService) { }

  ngOnInit() {
    this.detailasignaturaService.getInfo().subscribe((resp :any)=>{
      console.log(resp)
      this.info = resp
    })
  }

}
