import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import { CheeseResult} from './cheese.model'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AllCheeseService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private allCheeseUrl = `http://cheeswhiz.herokuapp.com/api/cheese`

  constructor(private http: Http) {

  }
  getAllCheese (): Promise<CheeseResult[]> {
    return this.http.get(this.allCheeseUrl)
      .toPromise()
      .then(res => res.json())
  }
  getCheeseByName(term: string): Promise<CheeseResult> {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${term}`)
      .toPromise()
      .then(res => res.json())
      // .then(res => console.log(res))
  }
}
