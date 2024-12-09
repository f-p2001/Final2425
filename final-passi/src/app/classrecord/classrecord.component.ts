import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-class-record',
  imports: [CommonModule, NgForOf, RouterLink],
  templateUrl: './classrecord.component.html',
  styleUrls: ['./classrecord.component.css']
})
export class ClassRecordComponent {
  students = [
    { id: 1, name: 'John Doe', subject: 'PE', activity: 'Basketball', additionalInfo: 'Captain of the team', instructor: 'Jack Sparrow' },
    { id: 2, name: 'Jane Smith', activity: 'Debate', additionalInfo: 'Won regional competition', subject: 'Speech', instructor: 'Sarah Connor' },
    { id: 3, name: 'Sam Wilson', activity: 'Music', additionalInfo: 'Plays the guitar', subject: 'Music', instructor: 'Tony Stark' }
  ];

  selectedStudent: any = null;

  viewStudent(student: any) {
    this.selectedStudent = student;  // Assign the clicked student to selectedStudent
    console.log('Selected student:', this.selectedStudent);  // Log the selected student
    const modalElement = document.getElementById('studentModal');
    if (!modalElement) {
      console.error('Modal element not found!');
      return;
    }
    console.log('Modal element:', modalElement);
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();
  }
}

