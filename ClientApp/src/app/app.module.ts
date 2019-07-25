import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components//register/register.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { CheckInComponent } from './shared/components/check-in/check-in.component';
import { CheckOutComponent } from './shared/components/check-out/check-out.component';
import { ConsultarComponent } from './shared/components/consultar/consultar.component';
import { LiquidarComponent } from './shared/components/liquidar/liquidar.component';
import { PreregComponent } from './shared/components/prereg/prereg.component';
import { CheckOutTwoComponent } from './shared/components/check-out-two/check-out-two.component';
import { CheckInTwoComponent } from './shared/components/check-in-two/check-in-two.component';
import { CheckinthreeComponent } from './shared/components/checkinthree/checkinthree.component';
import { AdminRegisterComponent } from './private/components/admin-register/admin-register.component';
import { AdminHomeComponent } from './private/components/admin-home/admin-home.component';
import { AdminViewRoomsComponent } from './private/components/admin-view-rooms/admin-view-rooms.component';
import { AdminConsultarComponent } from './private/components/admin-consultar/admin-consultar.component';
import { AdminViewReservationsComponent } from './private/components/admin-view-reservations/admin-view-reservations.component';
import { AdminViewUsersComponent } from './private/components/admin-view-users/admin-view-users.component';
import { AdminChangeRoomsComponent } from './private/components/admin-change-rooms/admin-change-rooms.component';
import { AdminAddRoomComponent } from './private/components/admin-add-room/admin-add-room.component';
import { CheckInTwoOneComponent } from './shared/components/check-in-two-one/check-in-two-one.component';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavHomeComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    CheckInComponent,
    CheckOutComponent,
    ConsultarComponent,
    LiquidarComponent,
    PreregComponent,
    CheckOutTwoComponent,
    CheckInTwoComponent,
    CheckinthreeComponent,
    AdminRegisterComponent,
    AdminHomeComponent,
    AdminViewRoomsComponent,
    AdminConsultarComponent,
    AdminViewReservationsComponent,
    AdminViewUsersComponent,
    AdminChangeRoomsComponent,
    AdminAddRoomComponent,
    CheckInTwoOneComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomePageComponent, canActivate:[AuthGuard] },
      { path: 'register', component: RegisterComponent },
      { path: 'preregister', component: PreregComponent },
      { path: 'checkin', component: CheckInComponent, canActivate:[AuthGuard]},
      { path: 'checkout', component: CheckOutComponent, canActivate:[AuthGuard] },
      { path: 'consultar', component: ConsultarComponent, canActivate:[AuthGuard] },
      { path: 'liquidar', component: LiquidarComponent, canActivate:[AuthGuard] },
      { path: 'checkout/:id', component:CheckOutTwoComponent, canActivate:[AuthGuard] },
      { path: 'checkin/:id', component: CheckInTwoComponent, canActivate:[AuthGuard]},
      { path: 'checkin/:id/addMore', component: CheckInTwoOneComponent, canActivate:[AuthGuard] },
      { path: 'checkin/:idPerson/:id', component: CheckinthreeComponent, canActivate:[AuthGuard]},
      { path: 'register/:id', component: AdminRegisterComponent, canActivate:[AuthGuard] },
      { path: 'adhome', component:AdminHomeComponent, canActivate:[AuthGuard] },
      { path: 'viewRooms', component:AdminViewRoomsComponent, canActivate:[AuthGuard]},
      { path: 'viewReservations', component: AdminViewReservationsComponent, canActivate:[AuthGuard]},
      { path: 'viewUsers', component: AdminViewUsersComponent, canActivate:[AuthGuard]},
      { path: 'addRoom', component: AdminAddRoomComponent, canActivate:[AuthGuard]},
      { path: 'adconsultar', component: AdminConsultarComponent, canActivate:[AuthGuard] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 