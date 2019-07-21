import { Component } from '@angular/core';

@Component({
  selector: 'movie-name',
  templateUrl: './movie-name.component.html',
  styleUrls: ['./movie-name.component.css']
})
export class MovieNameComponent {

  movieName: string;


  onKeyUp(){
    console.log(this.movieName);
  }

}
