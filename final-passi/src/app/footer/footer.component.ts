import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class FooterComponent {
  email = 'jane.smith@abc.edu';  // Corrected the property assignment
}
