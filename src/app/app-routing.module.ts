import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: 'movies' ,component: MoviesComponent },
  {path : 'dashboard' , component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [MoviesComponent , AppComponent]