import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IBeer } from '../models/beerInter';
import { beerList } from '../models/store';
import { find } from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class SerbeerService {

  constructor() { }

  beers: IBeer[] = beerList;

  private beers$: Observable<IBeer> = from(this.beers)

  public beerFinder(id: number): Observable<IBeer | undefined>  {
    return this.beers$.pipe(find(beer => beer.id === id))
  }

  public beerSelector(name:string, type: string): Observable<IBeer | undefined> {
    return this.beers$.pipe(find(beer => beer.name === name && beer.type === type))
  }

}
