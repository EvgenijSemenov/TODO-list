import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponentComponent
      },
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
