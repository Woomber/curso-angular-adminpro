import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title: string = 'Gráfica sin título';
  @Input('labels') doughnutChartLabels: Label[] = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  @Input() colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
