import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }

  cambiarValor( valor: number ) {
    if( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    } else if( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      this.progreso = 0;
    } else {
      this.valorSalida.emit(this.progreso);
      this.progreso += valor;
    }
  }

  onChange( nuevoValor: number ) {
    if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else{
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit( this.progreso );
  }

}
