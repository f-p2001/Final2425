import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { ServiceComponent } from '../service/service.component';
import { RouterModule } from '@angular/router';

declare var window: any; // Declare window for Bootstrap modal

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, ViewComponent, NgForOf, RouterModule],
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  email = 'john.doe@example.com';

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

    this.service.changeInstructor(student.instructor, student.email, student.courses);
  }

  openModal() {
    const modal = new window.bootstrap.Modal(document.getElementById('studentModal'));
    modal.show();
  }
}