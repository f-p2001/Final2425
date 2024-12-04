import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  cancel() {
    console.log('Action canceled');
    // Add your logic for canceling the operation, such as navigating away from the page or resetting the form.
  }

}
