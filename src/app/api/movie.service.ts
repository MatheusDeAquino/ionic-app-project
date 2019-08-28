import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // parte do api e json

@Injectable()
export class MovieService {
  private baseApiPath = "https://api.themoviedb.org/3/";

  constructor(public http: HttpClient) { 
    console.log('Hello Movie Provider!');
  }

  getlatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=da2596186f21dda65cac221c16ea8335" );
  }
}