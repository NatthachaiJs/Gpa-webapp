import { Component, EventEmitter, Output ,OnInit} from '@angular/core';
@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.scss']
})
export class AddScreenComponent implements OnInit{
  @Output() goToScoreScreen = new EventEmitter<void>();
  collectScore: number = 0; // Initialize with 0
  testScore: number = 0;
  name: string = '';
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

  checkCollectScore() {
    if (this.collectScore > 30) {
      alert("Collect score should not exceed 30");
      this.collectScore = 0; // Reset to 0
    }
  }

  checkTestScore() {
    if (this.testScore > 70) {
      alert("Test score should not exceed 70");
      this.testScore = 0; // Reset to 0
    }
  }
  checkName() {
    if (this.name.trim() === '') {
      alert("Please enter a name.");
      return false; // Return false if name is empty
    }
    return true; // Return true if name is not empty
  }

  isValidScores(): boolean {
    return this.collectScore <= 30 && this.testScore <= 70;
  }
  addScores() {
    if (!this.checkName() || !this.isValidScores()) {
      alert("Please enter valid scores and name.");
      return; // Exit the function early if name or scores are not valid
    }

    const totalScore = this.collectScore + this.testScore;
    let grade: string;
    if (totalScore >= 90) {
      grade = 'A';
    } else if (totalScore >= 80) {
      grade = 'B';
    } else if (totalScore >= 70) {
      grade = 'C';
    } else if (totalScore >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    // Retrieve existing student data from local storage
    let studentData: any[] = JSON.parse(localStorage.getItem('studentData') || '[]');

    // Add new student data to the array
    studentData.push({
      name: this.name.trim(),
      totalScore: totalScore,
      grade: grade
    });

    // Save updated student data back to local storage
    localStorage.setItem('studentData', JSON.stringify(studentData));

    // Optionally, clear inputs after saving
    this.name = '';
    this.collectScore = 0;
    this.testScore = 0;

    alert("Data saved successfully.");
  }

  goToScore() {
    this.goToScoreScreen.emit();
  }

}
