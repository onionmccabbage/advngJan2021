import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../typicode.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId:number = 1
  users // for all the returned users
  user // for one returned user
  constructor( private typicode:TypicodeService ) { }

  ngOnInit(): void {
  }
  // method to return ALL users (via our service)
  getData(){
    this.typicode.getUsers()
      .subscribe( (response)=>{
        console.log(response)
        this.users = response
      }  ) 
  }
  // method to return ONE user
  getSingleUser(){
    this.typicode.getOneUser(this.userId)
      .subscribe( (response)=>{
        console.log(response)
        this.user = response
      } )
  }

}
