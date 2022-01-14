import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardFavoriteComponent } from './card-favorite/card-favorite.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CardFavoriteComponent,
  ],
  exports:[
    HeaderComponent,
    CardComponent,
    CardFavoriteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
