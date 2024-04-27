import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {
  @Output() goToScoreScreen = new EventEmitter<void>();

  goToScore() {
    this.goToScoreScreen.emit();
  }
  
}
