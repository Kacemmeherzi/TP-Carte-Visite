import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarteVisiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
