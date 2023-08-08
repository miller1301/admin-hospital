import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss']
})
export class Grafica1Component {

  public labels1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data1 = [
    { data: [10, 15, 40], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

}
