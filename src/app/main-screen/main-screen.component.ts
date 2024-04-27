import { Component, EventEmitter, Output ,OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit{
  constructor() { }

  ngOnInit() {
    // Check if data already exists in local storage
    const existingData = localStorage.getItem('studentData');
    if (!existingData) {
      // Mockup data for 10 people
      const mockData = [
        { "name": "John", "totalScore": 82, "grade": "B" },
        { "name": "Emma", "totalScore": 75, "grade": "C" },
        { "name": "Michael", "totalScore": 91, "grade": "A" },
        { "name": "Sophia", "totalScore": 65, "grade": "D" },
        { "name": "William", "totalScore": 78, "grade": "C" },
        { "name": "Olivia", "totalScore": 88, "grade": "B" },
        { "name": "James", "totalScore": 70, "grade": "C" },
        { "name": "Ava", "totalScore": 95, "grade": "A" },
        { "name": "Robert", "totalScore": 60, "grade": "F" },
        { "name": "Isabella", "totalScore": 84, "grade": "B" }
      ];
      
      // Save mockup data to local storage
      localStorage.setItem('studentData', JSON.stringify(mockData));
    }
  }
  getStudentData(): any[] {
    const studentDataString = localStorage.getItem('studentData');
    if (studentDataString) {
      return JSON.parse(studentDataString);
    } else {
      return [];
    }
  }
  calculateTop3Students(): any[] {
    const studentData = this.getStudentData();
    return studentData.sort((a, b) => b.totalScore - a.totalScore).slice(0, 3);
  }
  calculateMinMaxAvgGPA(): { min: number, max: number, avg: number } {
    const studentData = this.getStudentData();
    const totalScores = studentData.map(student => student.totalScore);
    const min = Math.min(...totalScores);
    const max = Math.max(...totalScores);
    const sum = totalScores.reduce((acc, score) => acc + score, 0);
    const avg = sum / totalScores.length || 0; // To avoid division by zero
    return { min, max, avg };
  }

  @Output() goToScoreScreen = new EventEmitter<void>();

  goToScore() {
    this.goToScoreScreen.emit();
  }
  
}
