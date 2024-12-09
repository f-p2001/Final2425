import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: any = {};
  students = [
    { id: '1', name: 'John Doe', subject: 'PE', activity: 'Basketball', additionalInfo: 'Captain of the team', instructor: 'Jack Sparrow', instructorEmail: 'jack@abcuniversity.com', courses: 'Physical Education, Basketball', consultationSchedule: 'Mon-Fri, 3 PM - 5 PM' },
    { id: '2', name: 'Jane Smith', activity: 'Debate', additionalInfo: 'Won regional competition', subject: 'Speech', instructor: 'Sarah Connor', instructorEmail: 'sarah@abcuniversity.com', courses: 'Debate, Public Speaking', consultationSchedule: 'Tue-Thu, 1 PM - 3 PM' },
    { id: '3', name: 'Sam Wilson', activity: 'Music', additionalInfo: 'Plays the guitar', subject: 'Music', instructor: 'Tony Stark', instructorEmail: 'tony@abcuniversity.com', courses: 'Music, Guitar', consultationSchedule: 'Mon-Fri, 4 PM - 6 PM' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: ServiceComponent
  ) {}

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.student = this.students.find(student => student.id === studentId) || null;
      if (this.student) {
        // Initialize the consultation schedule
        this.service.currentConsultationSchedule.subscribe(schedule => {
          this.student.consultationSchedule = schedule;
        });
      } else {
        console.error('Student not found');
      }
    } else {
      console.error('No student ID provided');
    }
  }

  saveStudent(): void {
    if (this.student) {
      console.log('Saving student:', this.student);

      // Update the service with the new values
      this.service.changeInstructor(this.student.instructor, this.student.instructorEmail, this.student.courses);

      // Navigate back after saving
      this.goBack();
    }
  }

  goBack(): void {
    this.location.back();
  }
}