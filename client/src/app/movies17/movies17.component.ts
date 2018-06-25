
import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from "../movies-service.service";



@Component({
  selector: 'app-movies17',
  templateUrl: './movies17.component.html',
  styleUrls: ['./movies17.component.css'],
  providers:[MoviesServiceService]
})
export class Movies17Component implements OnInit {
  moveList = [];
  movie = '';

  constructor(private movieService:MoviesServiceService){}

  ngOnInit() {

       this.movieService.getAll().subscribe(data => {
         for (let i = 0; i < data.length; i++) {
           if (data[i].year == "2017") {
             this.movie = data[i];
             this.moveList.push(this.movie);

           }
         }
          },
        error => console.log(error))

  }
}
