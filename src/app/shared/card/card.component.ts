import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/interfaces/board.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public board: any = null;
  @Output() newBoard = new EventEmitter<any>();
  
  desc: string = '';
  name: string | undefined;
  url: string | undefined;

  constructor() { }

  ngOnInit(): void {
    const { board: data } = this.board;
    this.desc = data.desc;
    this.url = data.url;
    this.name = data.name;
  }

  goToLink() {
    console.log(this.url);
    window.open(this.url, "_blank");
  }

 
  doFavorite(value: any) {
    value.favorite = !value.favorite
    this.newBoard.emit(value);
  }

}
