import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupPageComponent} from './pages/signup-page/signup-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FormBoxComponent} from './components/form-box/form-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    HomePageComponent,
    FormBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
