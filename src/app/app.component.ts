import { Component } from '@angular/core';
import { ApiHandlerService } from './core/services/api-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cards: Array<any>=[];

  constructor(
    private apiHandler: ApiHandlerService
  ) {
    this.apiHandler.images.subscribe((data:Array<any>)=>{
      this.cards=data;
    });
    this.apiHandler.getImagesJson();
  }
}
