import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule here
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  car: any = {
    id: 1,
    name: 'Rolls Royce Phantom',
    description: 'Experience the pinnacle of luxury and sophistication.',
    category: 'Luxury Sedan',
    price: 2500 // Price per day
  };

  // Method to save car details
  saveCar() {
    console.log('Car details saved:', this.car); 
    // Add your logic to save the car details (e.g., API call to save to a database)
  }

  cancel() {
    console.log('Action canceled');
    // Add your logic for canceling the operation, such as navigating away from the page or resetting the form.
  }
}
