import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  bands: Band[] = [
    {
      id: 0,
      name: 'Black Hawks',
      company: 'Sony',
      members: ['Luke', 'Sparrow', 'Snail'],
      genre: ['pop', 'heavy metal'],
      songs: ['Little More', 'Love Takes Over', 'Lobster']

    },
    {
      id: 1,
      name: 'White Eagles',
      company: 'Warner',
      members: ['Mad', 'Enemy', 'Sparrow'],
      genre: ['electronic', 'heavy metal'],
      songs: ['Little Bad', 'Gettin Over']
    },
    {
      id: 2,
      name: 'Grey Crows',
      company: 'Warner',
      members: ['Marvin', 'Andy', 'Luke'],
      genre: ['rock'],
      songs: ['Little Good', 'Underdog']
    },
    {
      id: 3,
      name: 'Old School',
      company: 'Universal',
      members: ['Mad', 'Enemy'],
      genre: ['electronic'],
      songs: ['Yesterday', 'Today', 'Tommorow', 'Eternity']
    },
    {
      id: 4,
      name: 'New rythm',
      company: 'Sony',
      members: ['Mad', 'Jeff', 'John'],
      genre: ['latin', 'soul'],
      songs: ['Whats going on', 'Quiet storm']
    },


  ]

  constructor() { }

  getBand(id: number): Observable<Band> {
    console.log(id);
    return of(this.bands.find(band => band.id === id));
  }
  getMemberBands(member: string): Observable<string[]> {
    return of(this.bands.filter(element => element.members.includes(member)).map(element => element.name));
  }
  //Pobiera wartości filtrujące, po czym zwraca wyłącznie odfiltrowane zespoły. Sprawdzane jest czy zostały podane jakiekolwiek queryParams
  getBands(filter): Observable<Band[]> {
    return of(this.bands
      .filter((element => element.name.includes(filter.name)||(!filter.name)))
      .filter(element => element.company.includes(filter.company)||(!filter.company))
      .filter(element => this.includesArray(element.genre, filter.genre)||(!filter.genre))
    );
  }

  /*

  //Funckja sprawdzajaca czy tablica a zawiera tablicę b
  includesArray(arrayA, arrayB): boolean {

    if (arrayB) {
      arrayB = Array.from(arrayB);

      if (typeof (arrayB) === 'string') {
        return arrayA.includes(arrayB);
      }

      let stringA = '';
      arrayA.forEach(element => {
        stringA = stringA.concat(element)
      });
      let stringB = '';
      arrayB.forEach(element => {
        stringB = stringB.concat(element)
      });

      return stringA.includes(stringB);
    }
    else {
      return true;
    }

  }
  */

  includesArray(arrayA,arrayB):boolean{
    let contains = true;
    arrayA.forEach(element => {
      contains = contains&&arrayB.includes(element);
      console.log(contains);
      
    });
    
    return contains;

  }


}

export interface Band {
  id: number,
  name: string,
  company: string,
  members: string[],
  genre: string[],
  songs: string[]
}


