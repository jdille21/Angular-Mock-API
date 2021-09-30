import { Component } from '@angular/core';
import images from './core/constants/images.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Array<any>=images;

  constructor() {
    console.log(images);
  }
}
