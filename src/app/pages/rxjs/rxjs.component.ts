import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;
  
  constructor() {
    
    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe({
    //   next: (valor) => console.log(`Subs: ${valor}`),
    //   error: (err) => console.warn(`Error: ${err}`),
    //   complete: () => console.info(`Obs terminado`)
    // });

    this.intervalSubs = this.returnInterval().subscribe({
      next: (value) => console.log(value)
    });

  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(500).pipe(
      map((number) => number + 1),
      filter((number) => (number % 2 === 0) ? true : false),
      take(4)
    );
  }

  returnObservable(): Observable<number> {
    let i = 0;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if( i === 4 ) {
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 2 ) {
          observer.error('i llegó a 2');
        }

      }, 1000)
    });

  }

}
