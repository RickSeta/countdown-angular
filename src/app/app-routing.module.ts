import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciaCountdownComponent } from './components/gerencia-countdown/gerencia-countdown.component';
import { Display1Component } from './pages/display1/display1.component';

const routes: Routes = [{
  path:"",
  component: GerenciaCountdownComponent
},{
  path:"tela1",
  component: Display1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
