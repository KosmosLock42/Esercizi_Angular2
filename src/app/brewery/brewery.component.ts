import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBeer } from '../models/beerInter';
import { SerbeerService } from '../shared/serbeer.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss'],
})
export class BreweryComponent implements OnInit {
  beers$!: Observable<IBeer | undefined>;
  chosenBname!: string;
  chosenBsize!: string;
  selectedB!: IBeer | undefined;

  showBeer() {
    this.beerServ
      .beerSelector(this.chosenBname, this.chosenBsize)
      .subscribe((data) => (this.selectedB = data));
  }

  constructor(private beerServ: SerbeerService) {}

  beers: IBeer[] = this.beerServ.beers;

  ngOnInit(): void {
    console.log(this.beerServ.beers);
  }
}
