import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MonedasComponent } from './components/monedas/monedas.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'monedas',
    component:MonedasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
