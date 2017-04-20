import { Component } from '@angular/core';
import { AllCheeseService } from '../get-all-cheese-btn/getCheesesService';
import { Router } from '@angular/router';
import { CheeseResult} from '../get-all-cheese-btn/cheese.model';

@Component({
  selector: 'app-search-cheese-name',
  templateUrl: './search-cheese-name.component.html',
  styleUrls: ['./search-cheese-name.component.css'],
})
export class SearchCheeseNameComponent {

  constructor(public allCheeseService: AllCheeseService, public router: Router) { }

  getCheeseResults(query): void {
    this.allCheeseService
      .getCheeseByName(query)
      .then(() => this.router.navigate(['/results']));
  }
}
