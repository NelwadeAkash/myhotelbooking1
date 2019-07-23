import { Component , OnInit , OnChanges , OnDestroy  } from '@angular/core';
import { MovieService } from "src/movie/movie.service";

@Component({
  selector: 'mov-app',
  templateUrl : './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent   {

  constructor( private movService : MovieService ){
    
  }

  // ngOnInit(): void {
  //   this.movies = this.movService.getMovies().subscribe(
  //       movies => { 
  //         this.movies = movies;
  //         this.searchedMovies = movies;
  //       }

  //   );
  // }
  movies:any[] = [];

  ngOnInit(): void {
  this.movService.getMovies().subscribe(
  movies =>{
  this.movies = movies;
  });

  }

}
