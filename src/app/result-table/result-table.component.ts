import { Component } from '@angular/core';
import { AllCheeseService } from '../../services/getCheesesService';

import { CheeseResult} from '../../models/cheese.model';
@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})

export class ResultTableComponent {

  constructor(public allCheeseService: AllCheeseService) {
  }

}
