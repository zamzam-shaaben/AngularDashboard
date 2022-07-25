import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../app.component';
import { todo, WebService } from '../web.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {
  title = 'movies';
  data: todo[] = [];
  columnsToDisplay: string[] = ['id','userId','title','completed']
  dataSource = new MatTableDataSource<todo>(this.data)
  constructor(private web: WebService) {}

  ngOnInit() : void{
    this.getAllReports();
  }
  public getAllReports(){
    let resp= this.web.GetTodos();
    resp.subscribe(report => this.dataSource.data = report as todo[])

  }

}
