// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentScreen: string = 'main';

  showMainScreen() {
    this.currentScreen = 'main';
  }

  showScoreScreen() {
    this.currentScreen = 'score';
  }

  showAddScreen() {
    this.currentScreen = 'add';
  }
}
