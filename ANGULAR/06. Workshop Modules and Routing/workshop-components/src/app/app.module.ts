import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AngularFireModule } from '@angular/fire/compat';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesListComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
