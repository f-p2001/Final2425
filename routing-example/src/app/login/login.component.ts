import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cancel() {
    console.log('Action canceled');
    // Add your logic for canceling the operation, such as navigating away from the page or resetting the form.
  }
}
