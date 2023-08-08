import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent {

  @Input() title: string = 'Sin título'; 
  @Input() labels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input() data: any[] = [
    { data: [350, 450, 100], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

}
