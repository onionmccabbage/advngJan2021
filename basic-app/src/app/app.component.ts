import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // we declare any models for this component
  title = 'Simple Angular App';
  username = 'Greta'
  products = [{name:'Pots', price:'1.99'}, 
              {name:'Dots', price:'2.99'}, 
              {name:'Spots', price:3.99}]
}
