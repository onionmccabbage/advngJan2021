import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class GetSwapiService {
  constructor(private http:HttpClient){}

  getCategories (){
    const swapiURL = `https://swapi.co/api/`
    return this.http.get(swapiURL).pipe(
      catchError(this.handleError)
    );
  }

  getSwapiReport (category, num): Observable<object> {
    const swapiURL = `https://swapi.co/api/${category}/${num}/`
    return this.http.get<object>(swapiURL).pipe(
      catchError(this.handleError)
    );
  }

  // ancilliary method to retrieve an individual film
  getRelatedFilmData (paramFilmURL): Observable<object> {
    return this.http.get<object>(paramFilmURL).pipe(
      catchError(this.handleError)
    );
  }

  // method to handle any http errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something unexpected happened');
  };

}
