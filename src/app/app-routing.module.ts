import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ISeriesComponent } from './i-series/i-series.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'series/:abbr', component: ISeriesComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
