import { Component, OnInit, Input } from '@angular/core';
import { AllCheeseService } from './getCheesesService'
// import { CheeseResult} from './cheese.model'


@Component({
  selector: 'app-get-all-cheese-btn',
  templateUrl: './get-all-cheese-btn.component.html',
  styleUrls: ['./get-all-cheese-btn.component.css']
})
export class GetAllCheeseBtnComponent implements OnInit {
  title = 'This is getAllCheeseButton'
  // cheeses: CheeseResult[];
  // @Input() valueToPass = GetAllCheeseBtnComponent.cheeses
// @Input ()
  constructor(private allCheeseService: AllCheeseService) { }

  ngOnInit() {
  }


  getCheese(): void {
    this.allCheeseService
      .getAllCheese()
  }
}
