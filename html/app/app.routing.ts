import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { CheckInComponent } from './shared/components/check-in/check-in.component';
import { CheckOutComponent } from './shared/components/check-out/check-out.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { ConsultarComponent } from './shared/components/consultar/consultar.component';
import { LiquidarComponent } from './shared/components/liquidar/liquidar.component'
import { PreRegisterComponent}  from './shared/components/pre-register/pre-register.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'preregister', component: PreRegisterComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'checkin', component: CheckInComponent },
    { path: 'checkout', component: CheckOutComponent },
    { path: 'consultar', component: ConsultarComponent },
    { path: 'liquidar', component: LiquidarComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);