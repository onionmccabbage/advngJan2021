import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // we declare any models for this component
  title:string = 'Simple Angular App';
  username = 'Greta'
  label='Go'
  products = [{name:'Pots', price:'1.99'}, 
              {name:'Dots', price:'2.99'}, 
              {name:'Spots', price:3.99}]
  timestamp:any = new Date()
  agreeFlag:boolean = true
  id:string = '0'
  category:string = 'albums'
  // declare methods for this component
  handleAgree(){
    this.agreeFlag = false
  }
  handleMyEvent(evt){
    // the custom event is handled here
    this.username = evt.data
  }
  handleDataEvent(evt){
    this.id = evt.data.id
    this.category = evt.data.category
  }
}
