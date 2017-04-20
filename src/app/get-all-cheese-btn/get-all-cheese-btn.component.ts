import { Component, Input } from '@angular/core';
import { AllCheeseService } from './getCheesesService';

@Component({
  selector: 'app-get-all-cheese-btn',
  templateUrl: './get-all-cheese-btn.component.html',
  styleUrls: ['./get-all-cheese-btn.component.css']
})

export class GetAllCheeseBtnComponent {
  title = 'See All Cheeses';

  constructor(public allCheeseService: AllCheeseService) { }

  getCheese(): void {
    this.allCheeseService
      .getAllCheese();
  }
}
