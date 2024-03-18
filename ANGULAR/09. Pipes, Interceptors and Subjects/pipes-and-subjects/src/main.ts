import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, Subject } from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// function interval(delay: number, count?: number) {
//   let counter = 0;
//   return new Observable((obs) => {
//     const i = setInterval(() => {
//       if (count === counter) {
//         obs.complete();
//         return;
//       }
//       obs.next(counter++);
//     }, delay);
//     return () => {
//       clearInterval(i);
//     };
//   });
// }

// interval(1000, 8).subscribe({
//   next: console.log,
//   error: (err) => console.error(err),
//   complete: () => console.log('Observer completed'),
// });

// SUBJECTS DEMO

const subj$$ = new Subject();

subj$$.subscribe({
  next: console.log,
  error: (err) => console.log(err),
  complete: () => console.log('subject completed'),
});
