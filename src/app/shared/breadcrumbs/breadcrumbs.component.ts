import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string = '';
  titulo$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.titulo$ = this.getTitle().subscribe(({title}) => {
      this.titulo = title;
      document.title = `AdminPro - ${title}`;
    });
    console.log(this.route.snapshot.children[0].data);
  }

  ngOnDestroy(): void {
    this.titulo$.unsubscribe();
  }

  getTitle() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),
    );
  }

}
