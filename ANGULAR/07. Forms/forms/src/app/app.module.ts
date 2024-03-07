import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirectiveDirective } from './my-structural-directive.directive';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyRouterLinkDirective,
    MyStructuralDirectiveDirective,
    PlaygroundComponent,
    MaxCountDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // template driven form
    ReactiveFormsModule, // reactive forms approach
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
