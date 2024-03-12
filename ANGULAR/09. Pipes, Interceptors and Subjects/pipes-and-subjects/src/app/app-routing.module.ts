import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LazyModule } from './lazy/lazy.module';
import { enableDebugTools } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    // make a module load lazy
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules, loads all modules on initial load
      // enableTracing:true to debug redirects and routing in general
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
