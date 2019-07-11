import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { routing }        from '../app.routing';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { LiquidarComponent } from './components/liquidar/liquidar.component';
import { PreRegisterComponent}  from './components/pre-register/pre-register.component'

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, routing
  ]
})
export class SharedModule { }
