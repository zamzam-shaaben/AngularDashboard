import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {NumericLiteral} from 'typescript';


export interface todo {
 
  id: number;
  userid: number;
  title: string;
  completed: string;

}


@Injectable({
  providedIn: 'root'
})
export class WebService {
 
  constructor(private http: HttpClient) {}
  apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
  public GetTodos(): Observable<todo[]> {
    return this.http.get<todo[]>(this.apiUrl);
  }
}
