import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSub: Subscription;

  constructor() {

    this.intervalSub = this.getInterval().subscribe(console.log);


    this.getObservable().pipe(
      retry(1)
    ).subscribe(val => {
      console.log('Sub', val);
    }, err => console.warn(err),
    () => console.info('Completado')
    );


  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  getInterval(): Observable<number> {
    return interval(150).pipe(
      map(val => val + 1),
      filter(val => val % 2 == 0),
      // take(10),
    );
  }

  getObservable(): Observable<number> {
    let i = 0;

    return new Observable<number>(observer => {
      const interval = setInterval(() => {
        observer.next(i++);

        if(i == 2) {
          clearInterval(interval);
          observer.error("upsi daisy")
        }

        if(i === 4) {
          clearInterval(interval);
          observer.complete();
        }
      }, 750);
    });
  }

}
