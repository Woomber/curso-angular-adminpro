import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels2 = ['Sí', 'No',];
  data2 = [[100, 50]]

  constructor() { }

  ngOnInit(): void {
  }

}
