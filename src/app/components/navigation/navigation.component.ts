import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogFavouriteComponent } from '../dialog-favourite/dialog-favourite.component';
import {LocalStorageService} from'../../local-storage.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private localStorageService: LocalStorageService) { }
  

  genreSelected: string[] = [];

  genreInput = ['electronic', 'heavy metal', 'rock', 'pop', 'latin', 'soul'];

  companyInput = ['', 'Warner', 'Sony', 'Universal'];
  filterForm = this.fb.group({
    bandName: [''],
    bandCompany: [''],
    bandGenre: this.fb.array([
      this.fb.control(''),
      this.fb.control(''),
      this.fb.control(''),
      this.fb.control(''),
      this.fb.control(''),
      this.fb.control(''),

    ])
  });


  ngOnInit(): void {
    console.log(this.localStorageService.getFavouritesFromLocalStorage().band)

    if(this.localStorageService.getFavouritesFromLocalStorage().band ==undefined){
      this.onFavourite();

    }
  }
  

  showSidebar = false;



  //Potwierdzenie wybranych filtrów przekierowuje do strony z filtrami oraz dołącza queryParams
  onSubmit() {
    this.genreSelected = [];
    for (let i = 0; i < this.genreInput.length; i++) {
      if (this.filterForm.value.bandGenre[i]) {
        this.genreSelected.push(this.genreInput[i])
      }
    }

    this.router.navigate(['/list'], { queryParams: { name: this.filterForm.value.bandName, company: this.filterForm.value.bandCompany, genre: this.genreSelected } });
  }
  onFavourite() {
    //TODO: wyświetlenie dialogu favourites, aktywowanego po naciśnieciu przycisku favourites lub jeśli nie ma żadnych favourites w local storage, które możnaby pobrać do store.
    const dialogRef = this.dialog.open(DialogFavouriteComponent, {
      width: '400px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(
      data=>{
        this.localStorageService.storeOnLocalStorage(data.favouriteBand,data.favouriteGenre);
      });
      
    
  }






}
