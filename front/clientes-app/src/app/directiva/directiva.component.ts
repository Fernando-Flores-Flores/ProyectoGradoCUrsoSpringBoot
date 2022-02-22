import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
listaCurso:string[]=['Java','TypeScript','JAva SE','C#','PHP','Python'];
habilitar:boolean=true;
setHabilitar():void{
  this.habilitar=(this.habilitar==true)?false:true
}
}
