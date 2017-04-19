import { Component, OnInit } from '@angular/core';
import { AllCheeseService } from '../get-all-cheese-btn/getCheesesService'
import { CheeseResult} from '../get-all-cheese-btn/cheese.model'


@Component({
  selector: 'app-search-cheese-name',
  templateUrl: './search-cheese-name.component.html',
  styleUrls: ['./search-cheese-name.component.css'],
  // providers: [AllCheeseService]
})
export class SearchCheeseNameComponent implements OnInit {
  // cheeses: CheeseResult;
  constructor(private allCheeseService: AllCheeseService) { }

  ngOnInit() {
  }
  getCheeseResults(query): void {
    this.allCheeseService
      .getCheeseByName(query)
      // .then(cheeses => this.cheeses = cheeses)
  }
}
