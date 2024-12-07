import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute for route parameters

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: any = {}; // Declare the student object to bind form fields

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the student data using route params or static data
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      // Logic to fetch the student by ID, here just a mock student object
      this.student = {
        id: studentId,
        name: 'John Doe',
        activity: 'Math'
      };
    }
  }

  saveStudent(): void {
    // Logic to save the updated student data
    console.log('Saving student:', this.student);
    // Implement save functionality (e.g., calling a service or sending data to an API)
  }
}
