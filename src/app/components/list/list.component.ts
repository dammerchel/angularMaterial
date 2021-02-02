import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { BandsService, Band } from '../../bands.service';
import { ActivatedRoute, Params } from '@angular/router';
import {LocalStorageService} from'../../local-storage.service';


//Odpowiada za wyświetalnie odfiltrowanych zespołów
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  bands: Band[]

  //Obiekt umożliwiający dostep do store
  favourites = {
    favouriteBand:'',
    favouriteGenre:''
  }
  orderObj;

  constructor(private route: ActivatedRoute, private bandsService: BandsService, private localStorageService: LocalStorageService) {        
    

  }


  ngOnInit(): void {
    //Subskrybcja query params umożliwiająca pobieranie ich wartosci przy kązdej aktualizacji queryparams
    this.route.queryParamMap
      .subscribe((params) => {
        this.orderObj = { ...params.keys, ...params };
        this.getBands(this.orderObj.params);
      }
      );

      this.getFavourites();

      

  }

  getBands(queryParams) {

    this.bandsService.getBands(queryParams).subscribe(bands => {
      this.bands = bands
    });    
  }
  getFavourites(){
    const currentFavourites = this.localStorageService.getFavouritesFromLocalStorage();
    this.favourites.favouriteBand = currentFavourites.band;
    this.favourites.favouriteGenre = currentFavourites.genre;
    


  }

}
