import { Component, OnInit } from '@angular/core';
import { AllCheeseService } from './getCheesesService'
import { CheeseResult} from './cheese.model'


@Component({
  selector: 'app-get-all-cheese-btn',
  templateUrl: './get-all-cheese-btn.component.html',
  styleUrls: ['./get-all-cheese-btn.component.css']
})
export class GetAllCheeseBtnComponent implements OnInit {
  title = 'This is getAllCheeseButton'
  cheeses: CheeseResult[];

  constructor(private allCheeseService: AllCheeseService) { }

  ngOnInit() {
  }
  getCheese(): void {
    this.allCheeseService
      .getAllCheese()
      .then(cheeses => this.cheeses = cheeses);
  }
}
