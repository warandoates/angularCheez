import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { CheeseResult} from './cheese.model';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AllCheeseService {
  results: CheeseResult[];
  public headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) { }

  getAllCheese (): Promise<CheeseResult[]> {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese`)
      .toPromise()
      .then(res => res.json())
      .then(res => this.results = res);
  }

  getCheeseByName(query: string): Promise<CheeseResult> {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${query}`)
      .toPromise()
      .then(res => res.json())
      .then(res => this.results = res);
  }

}
