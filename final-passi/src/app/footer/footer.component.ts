import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  instructor: string = ''; 
  instructorEmail: string = ''; 
  courses: string = ''; 

  constructor(private service: ServiceComponent) {}

  ngOnInit() {
    // Subscribe to the current instructor, email, and courses
    this.service.currentInstructor.subscribe((instructor) => {
      this.instructor = instructor; 
      console.log('Instructor updated:', this.instructor); 
    });

    this.service.currentInstructorEmail.subscribe((email) => {
      this.instructorEmail = email;
      console.log('Instructor email updated:', this.instructorEmail);
    });

    this.service.currentCourses.subscribe((courses) => {
      this.courses = courses;
      console.log('Courses updated:', this.courses);
    });
  }
}
