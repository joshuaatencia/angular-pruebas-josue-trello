import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../interfaces/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private url = 'https://api.trello.com/1/';

  boards: Board[] = [];

  constructor(
    private http: HttpClient
  ) { }


  boardxUsers(username: string): Observable<Board[]> {

    return this.http.get<Board[]>(`${this.url}/members/${username}/boards`);
  }
}
