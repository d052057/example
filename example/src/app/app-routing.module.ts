import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'example',
    loadComponent: () => import('../app/example/example.component')
      .then(mod => mod.ExampleComponent)
  },
  {
    path: 'example2',
    loadComponent: () => import('../app/example2/example2.component')
      .then(mod => mod.Example2Component)
  },
  {
    path: 'home',
    loadComponent: () => import('../app/home/home.component')
      .then(mod => mod.HomeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
