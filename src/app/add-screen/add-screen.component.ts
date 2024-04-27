import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.scss']
})
export class AddScreenComponent {
  @Output() goToScoreScreen = new EventEmitter<void>();

  goToScore() {
    this.goToScoreScreen.emit();
  }

}
