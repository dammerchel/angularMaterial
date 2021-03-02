import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { ListComponent } from './components/list/list.component';
import { DetailsBandComponent } from './components/details-band/details-band.component';
import { DialogFavouriteComponent } from './components/dialog-favourite/dialog-favourite.component';

import { StorageServiceModule } from 'ngx-webstorage-service';



import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';




@NgModule({
  declarations: [
    AppComponent,        
    ListComponent,    
    DetailsBandComponent,    
    DialogFavouriteComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    StorageServiceModule
    
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
