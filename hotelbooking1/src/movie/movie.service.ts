import { Injectable } from "@angular/core";
import { HttpClient ,  HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {tap} from 'rxjs/Operators';
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
    providedIn : 'root'
})


    // handleError: any;

    // movieurl = 'data/movie.json';

    // constructor(private httpser : HttpClient){
        
    // }

    // getMovies():Observable<any[]>{

    //     return this.httpser.get<any>(this.movieurl).pipe(tap(
    //         data => console.log('Movies : '+JSON.stringify(data))
    //     ) , catchError(this.handleError));
    // }

export class MovieService{

     movieurl = './data/data.json';

    constructor(private httpSer:HttpClient) {
    }


    getMovies():Observable<any[]>{
    
        return this.httpSer.get<any[]>(this.movieurl).pipe(
        tap(data => console.log('Movies : '+JSON.stringify(data))),
        catchError(this.handleError)
    );
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
       
    }

}