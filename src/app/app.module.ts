import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { ScoreScreenComponent } from './score-screen/score-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScreenComponent,
    ScoreScreenComponent,
    MainScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
