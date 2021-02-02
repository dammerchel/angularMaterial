import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-favourite',
  templateUrl: './dialog-favourite.component.html',
  styleUrls: ['./dialog-favourite.component.scss']
})
export class DialogFavouriteComponent implements OnInit {
  favourites = {
    favouriteBand: '',
    favouriteGenre: ''
  };
  favourites$: Observable<object>;

  constructor(private fb: FormBuilder,  private dialogRef: MatDialogRef<DialogFavouriteComponent>) {
    
  }

  ngOnInit(): void {
  }

  favouriteForm = this.fb.group({
    favouriteBand: [''],
    favouriteGenre: ['']
  })
  onSubmit() {    
    this.dialogRef.close(this.favouriteForm.value);
  }
  
}
