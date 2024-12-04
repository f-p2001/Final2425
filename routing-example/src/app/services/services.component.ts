import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule], // Add CommonModule to imports
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  cars = [
    { id: 1, name: 'Rolls Royce Phantom', category: 'Luxury Sedan' },
    { id: 2, name: 'Lamborghini Aventador', category: 'Sports Car' },
    { id: 3, name: 'Bentley Continental GT', category: 'Luxury Coupe' },
  ];

  deleteCar(carId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this car?');
    if (confirmDelete) {
      this.cars = this.cars.filter(car => car.id !== carId);
      console.log(`Car with ID ${carId} has been deleted.`);
    }
  }
}
