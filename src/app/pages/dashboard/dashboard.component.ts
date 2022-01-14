import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from 'src/app/interfaces/board.model';
import { BoardService } from 'src/app/services/board.service';
import { UsernameService } from 'src/app/services/username.service';

interface BoardWithFavorite {
  board: Board;
  favorite: boolean
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  boards: BoardWithFavorite[] = [];

  constructor(private _router: Router, private route: ActivatedRoute, private usernameService: UsernameService, private _boardService: BoardService) {

    if (this.route.snapshot.paramMap.get('username')) {
      this.usernameService.setUsername = this.route.snapshot.paramMap.get('username');
    } 
  }

  ngOnInit(): void {
    this._boardService.boards.forEach(data => {
      this.boards.push({ board: data, favorite: false });
    })
    if(this.boards.length == 0){
      this._router.navigate(['/login']);

    }
  }

  crossBoard(value:any){
    console.log(value);
  }
}
