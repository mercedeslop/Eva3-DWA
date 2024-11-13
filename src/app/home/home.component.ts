import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  img1 = "./img--background.png";
  img2 = "./about-5.webp";
  img3 = "./about-2.webp";
  img4 = "./avatar-4.jpg";
  img5 = "./avatar-5.jpg";
}
