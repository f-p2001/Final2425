import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-classrecord',
  standalone: true,
  imports: [CommonModule, NgForOf], // Import NgForOf here
  templateUrl: './classrecord.component.html',
  styleUrls: ['./classrecord.component.css']
})
export class ClassrecordComponent {
  students = [
    { id: 1, name: 'John Doe', activity: 'Math' },
    { id: 2, name: 'Jane Smith', activity: 'Science' },
    // Add more students as needed
  ];

  constructor() {}

  // Method to view student details
  viewStudent(student: any): void {
    console.log('View Student:', student);
  }

  // Method to edit student details
  editStudent(student: any): void {
    console.log('Edit Student:', student);
  }
}
