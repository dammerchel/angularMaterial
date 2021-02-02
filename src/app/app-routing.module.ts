import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailsBandComponent } from './components/details-band/details-band.component';



const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },  
  { path: 'list', component: ListComponent },
  { path: 'detailsBand/:id', component: DetailsBandComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
