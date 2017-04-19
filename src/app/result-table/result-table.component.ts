import { Component } from '@angular/core';
import { AllCheeseService } from '../get-all-cheese-btn/getCheesesService'

import { CheeseResult} from '../get-all-cheese-btn/cheese.model'
@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})

export class ResultTableComponent {

  constructor(private allCheeseService: AllCheeseService) {
  }
}
