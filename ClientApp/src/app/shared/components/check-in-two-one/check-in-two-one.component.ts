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
  addPather:number;
  added:number;
  constructor(private acompañanteService:AcompañanteService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.addPather=0;
    this.added=0;
    const id = +this.route.snapshot.paramMap.get('id');
    this.pather = {id:0, idHigh:id, name:'', lastname:'', sex:'Masculino', dateborn:'07/27/2000'}
  }

  addPatherM(){
    this.addPather=1;
    this.added=1;
  }

  more(){
    this.added=0;
    const id = +this.route.snapshot.paramMap.get('id');
    this.pather = {id:0, idHigh:id, name:'', lastname:'', sex:'Masculino', dateborn:'07/27/2000'}
  }

  add(){
    this.acompañanteService.addAcompañante(this.pather).subscribe(pather => (alert("Se ha agregado correctamente")))
  }

}
