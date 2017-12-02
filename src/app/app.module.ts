import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


// Component list
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ListComponent } from './list/list.component';
import { ServicesComponent } from './services/services.component';
import { ListModalComponent } from './list/modal.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full', },
  // TODO: replace this
  { path: '**', component: ErrorPageComponent, },
  { path: 'services', component: ServicesComponent, },
  { path: 'accounts/google/login/?process=login', component: GoogleLoginComponent, pathMatch: 'full', },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GoogleLoginComponent,
    ErrorPageComponent,
    ListComponent,
    ServicesComponent,
    ListModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    ListModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
