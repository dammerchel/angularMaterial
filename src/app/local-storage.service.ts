import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

//Klucz wykorzystywany do uzyskania dostępu do localStorage
const STORAGE_KEY = 'local_favourites';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  //Pobierz tablicę favourites z local storage
  public getFavouritesFromLocalStorage(): Favourite {
    const currentFavourites = this.storage.get(STORAGE_KEY) || [];    
    return currentFavourites;

  }
  //zapisz nowy stan local storage
  public storeOnLocalStorage(favouriteBand: string, favouriteGenre:string): void {
    let currentFavourites = this.getFavouritesFromLocalStorage();    
    currentFavourites = ({
      band: favouriteBand,
      genre: favouriteGenre
    });
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentFavourites);    
  }


}

export interface Favourite{
  band:string,
  genre:string

}
