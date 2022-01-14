import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = '';

  constructor(private usernameService: UsernameService) {

  }

  ngOnInit(): void {

    this.username = this.usernameService.getUsername;

  }

}
