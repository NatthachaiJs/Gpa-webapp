import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrls: ['./score-screen.component.scss']
})
export class ScoreScreenComponent {
  @Output() goToMainScreen = new EventEmitter<void>();
  @Output() goToAddScreen = new EventEmitter<void>();

  goToMain() {
    this.goToMainScreen.emit();
  }

  goToAdd() {
    this.goToAddScreen.emit();
  }
}
