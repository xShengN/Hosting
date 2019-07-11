import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { NavComponent } from './shared/components/nav/nav.component';
import { CheckInComponent } from './shared/components/check-in/check-in.component';
import { CheckOutComponent } from './shared/components/check-out/check-out.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { ConsultarComponent } from './shared/components/consultar/consultar.component';
import { LiquidarComponent } from './shared/components/liquidar/liquidar.component';
import { PreRegisterComponent } from './shared/components/pre-register/pre-register.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavComponent,
        CheckInComponent,
        CheckOutComponent,
        HomePageComponent,
        ConsultarComponent,
        LiquidarComponent,
        PreRegisterComponent 
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }