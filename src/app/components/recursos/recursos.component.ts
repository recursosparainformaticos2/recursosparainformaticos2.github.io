import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {
genre=["Platzi","Curso","Programacion Web"]
  constructor() { }

  ngOnInit(): void {
  }

}
