import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';

  constructor(private boardService: BoardService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.username);
    if (this.username !== '')
      this.boardService.boardxUsers(this.username).subscribe(data => {
       
        if (data.length > 0) {
          this.boardService.boards = data;
          this._router.navigate(['/dashboard', this.username]);
        } else {
          console.log("object");
          Swal.fire({
            title: 'Error!',
            text: `${this.username} no tiene Boards`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
  }

}
