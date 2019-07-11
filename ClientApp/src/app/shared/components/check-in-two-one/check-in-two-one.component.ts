import { Component, OnInit } from '@angular/core';
import { Pather } from 'src/app/models/Pather';
import { AcompañanteService } from 'src/app/services/acompañante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-in-two-one',
  templateUrl: './check-in-two-one.component.html',
  styleUrls: ['./check-in-two-one.component.css']
})
export class CheckInTwoOneComponent implements OnInit {
  pather:Pather;

  constructor(private acompañanteService:AcompañanteService, private route:ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pather = {id:0, idHigh:id, name:'', lastname:'', sex:'', dateborn:'07/27/200'}
  }

  add(){
    this.acompañanteService.addAcompañante(this.pather).subscribe(pather => (alert("Se ha agregado correctamente")))
  }

}
