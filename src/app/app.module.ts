import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { ScoreScreenComponent } from './score-screen/score-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScreenComponent,
    ScoreScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
