import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {
  // Store instructor details
  private instructorSource = new BehaviorSubject<string>('');
  private instructorEmailSource = new BehaviorSubject<string>('');
  private coursesSource = new BehaviorSubject<string>(''); // Store courses

  currentInstructor = this.instructorSource.asObservable();
  currentInstructorEmail = this.instructorEmailSource.asObservable();
  currentCourses = this.coursesSource.asObservable();

  // Change instructor data
  changeInstructor(instructor: string, email: string, courses: string) {
    this.instructorSource.next(instructor);  // Change instructor name
    this.instructorEmailSource.next(email);  // Change instructor email
    this.coursesSource.next(courses);        // Change courses
  }
}
