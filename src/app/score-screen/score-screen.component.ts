import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-score-screen',
  templateUrl: './score-screen.component.html',
  styleUrls: ['./score-screen.component.scss']
})
export class ScoreScreenComponent {
  constructor() { }

  getStudentData(): any[] {
    const studentDataString = localStorage.getItem('studentData');
    if (studentDataString) {
      return JSON.parse(studentDataString);
    } else {
      return [];
    }
  }
  deleteStudent(student: any) {
    const studentDataString = localStorage.getItem('studentData');
    if (studentDataString) {
      let studentData = JSON.parse(studentDataString);
      const index = studentData.findIndex((s: any) => s.name === student.name);
      if (index !== -1) {
        studentData.splice(index, 1);
        localStorage.setItem('studentData', JSON.stringify(studentData));
      }
    }
  }

  @Output() goToMainScreen = new EventEmitter<void>();
  @Output() goToAddScreen = new EventEmitter<void>();

  goToMain() {
    this.goToMainScreen.emit();
  }

  goToAdd() {
    this.goToAddScreen.emit();
  }
}
