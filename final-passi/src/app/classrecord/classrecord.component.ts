import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgForOf } from '@angular/common';
import { ViewComponent } from '../view/view.component';
import { ServiceComponent } from '../service/service.component';

declare var bootstrap: any;

@Component({
  selector: 'app-class-record',
  imports: [RouterLink, CommonModule, NgForOf, ViewComponent],
  templateUrl: './classrecord.component.html',
  styleUrls: ['./classrecord.component.css']
})
export class ClassRecordComponent {
  students = [
    { id: 1, name: 'John Doe', subject: 'PE', activity: 'Basketball', additionalInfo: 'Captain of the team', instructor: 'Jack Sparrow', email: 'jack@abcuniversity.com', courses: 'Physical Education, Basketball' },
    { id: 2, name: 'Jane Smith', activity: 'Debate', additionalInfo: 'Won regional competition', subject: 'Speech', instructor: 'Sarah Connor', email: 'sarah@abcuniversity.com', courses: 'Debate, Public Speaking' },
    { id: 3, name: 'Sam Wilson', activity: 'Music', additionalInfo: 'Plays the guitar', subject: 'Music', instructor: 'Tony Stark', email: 'tony@abcuniversity.com', courses: 'Music, Guitar' }
  ];

  selectedStudent: any = null;

  constructor(private service: ServiceComponent) {}

  viewStudent(student: any) {
    this.selectedStudent = student;
    console.log('Selected student:', this.selectedStudent);

    // Update instructor details
    this.service.changeInstructor(student.instructor, student.email, student.courses);

    // Show the modal using Bootstrap
    const modalElement = document.getElementById('studentModal');
    if (!modalElement) {
      console.error('Modal element not found!');
      return;
    }
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();
  }
}
