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

  saveCar() {
    // Logic to save the car details
    console.log('Car details saved', this.car);
  }

  cancel(): void {
    // Logic for canceling, navigate back to car list or do something else
    console.log('Action canceled');
  }
}
