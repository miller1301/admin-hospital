import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  progreso1: number = 25;
  progreso2: number = 35;

  get getProgreso1(): string {
    return `${ this.progreso1 }%`;
  }

  get getProgreso2(): string {
    return `${ this.progreso2 }%`;
  }

}
