import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {
  private instructorSource = new BehaviorSubject<string>('');
  currentInstructor = this.instructorSource.asObservable();

  private instructorEmailSource = new BehaviorSubject<string>('');
  currentInstructorEmail = this.instructorEmailSource.asObservable();

  private coursesSource = new BehaviorSubject<string>('');
  currentCourses = this.coursesSource.asObservable();

  private consultationScheduleSource = new BehaviorSubject<string>('No schedule available');
  currentConsultationSchedule = this.consultationScheduleSource.asObservable();

  
  private instructorScheduleMap: { [key: string]: string } = {
    'Jack Sparrow': 'Mon-Fri, 1 PM - 3 PM',
    'Sarah Connor': 'Mon-Fri, 2 PM - 4 PM',
    'Tony Stark': 'Mon-Fri, 3 PM - 5 PM',
    
  };

  changeInstructor(instructor: string, email: string, courses: string) {
    this.instructorSource.next(instructor);
    this.instructorEmailSource.next(email);
    this.coursesSource.next(courses);
    
    
    const schedule = this.instructorScheduleMap[instructor] || 'No schedule available'; 
    this.consultationScheduleSource.next(schedule);
  }
}