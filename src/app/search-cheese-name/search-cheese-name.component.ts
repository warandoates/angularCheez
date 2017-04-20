import { Component, OnInit } from '@angular/core';
import { AllCheeseService } from '../get-all-cheese-btn/getCheesesService'
import { CheeseResult} from '../get-all-cheese-btn/cheese.model'
import { Router } from '@angular/router'



@Component({
  selector: 'app-search-cheese-name',
  templateUrl: './search-cheese-name.component.html',
  styleUrls: ['./search-cheese-name.component.css'],
  // providers: [AllCheeseService]
})
export class SearchCheeseNameComponent implements OnInit {
  // cheeses: CheeseResult;
  constructor(private allCheeseService: AllCheeseService, private router: Router) { }

  ngOnInit() {
  }
  getCheeseResults(query): void {
    this.allCheeseService
      .getCheeseByName(query)
      .then(() => this.router.navigate(['/results']))
      // .then(cheeses => this.cheeses = cheeses)
  }
}
