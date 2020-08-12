import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progress: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number) {
    this.progress += valor;
    if(this.progress > 100){
      this.progress = 100;
    }
    if(this.progress < 0) {
      this.progress = 0;
    }

    this.valueChanged.emit(this.progress);
  }

  onChange(event: number) {
    if(event > 100) this.progress = 100;
    else if(event < 0) this.progress = 0;
    else this.progress = event;

    this.valueChanged.emit(this.progress);
  }


}
