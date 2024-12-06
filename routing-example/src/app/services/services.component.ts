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
    { id: 4, name: 'Ferrari 488 Spider', category: 'Convertible Sports Car' },
    { id: 5, name: 'Maserati Quattroporte', category: 'Luxury Sedan' },
    { id: 6, name: 'Porsche 911 Turbo S', category: 'High-Performance Sports Car' },
    { id: 7, name: 'Aston Martin DB11', category: 'Grand Tourer' },
    { id: 8, name: 'Bugatti Chiron', category: 'Hypercar' },
    { id: 9, name: 'McLaren 720S', category: 'Supercar' },
    { id: 10, name: 'Tesla Model S Plaid', category: 'Electric Performance Sedan' }
  ];

  deleteCar(carId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this car?');
    if (confirmDelete) {
      this.cars = this.cars.filter(car => car.id !== carId);
      console.log(`Car with ID ${carId} has been deleted.`);
    }
  }
}
