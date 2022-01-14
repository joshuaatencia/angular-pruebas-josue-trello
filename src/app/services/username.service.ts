import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  private username: string = '';

  constructor() { }


  
  public set setUsername(v : any) {
    this.username = v;
  }

  
  public get getUsername() : string {
    return this.username
  }
  
  
}
