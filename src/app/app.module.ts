import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';


const appRoute: Routes = [
  {path: 'movies' , component: MoviesComponent},
  {path: 'dashboard', component: AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    routingComponents
  ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatIconModule,  MatListModule, MatSidenavModule, MatToolbarModule, MatPaginatorModule, MatTableModule , RouterModule.forRoot(appRoute), HttpClientModule],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
