import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsBandComponent } from './components/details-band/details-band.component';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import {NotFoundComponent} from './components/not-found/not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'list', component: ListComponent },
  { path: 'detailsBand/:id', component: DetailsBandComponent }, 
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
