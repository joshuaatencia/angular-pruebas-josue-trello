import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.scss']
})
export class CardFavoriteComponent implements OnInit {

  @Input() public board: any = null;
  @Output() newBoard = new EventEmitter<any>();

  desc: string = '';
  name: string = '';
  url: string | undefined;
  username = '';

  constructor(private _usernameService: UsernameService) { }

  ngOnInit(): void {
    const { board: data } = this.board;
    this.desc = data.desc;
    this.url = data.url;
    this.name = data.name;
    this.username = this._usernameService.getUsername;
  }

  goToLink() {
    console.log(this.url);
    window.open(this.url, "_blank");
  }

  doFavorite(value: any) {
    value.favorite = !value.favorite
    // this.newBoard.emit(value);
  }
}
