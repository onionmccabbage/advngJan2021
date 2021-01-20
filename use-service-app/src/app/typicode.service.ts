import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  usersUrl:string = 'https://jsonplaceholder.typicode.com/users'

  constructor( private http:HttpClient ) {

  }

  //declare methods of this service
  getUsers(){
    return this.http.get( this.usersUrl )
      .pipe(
        catchError( this.handleError() )
      )
  }
  getOneUser(whichUser){
    return this.http.get( `${this.usersUrl}/${whichUser}` )
      .pipe(
        catchError( this.handleError() )
      )
  }

  handleError(){
    return(error:any)=>{ // Observable
      console.error(error) // show in console
      return error
    }
  }


}


