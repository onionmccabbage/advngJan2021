import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
// declare properties for this component
  @Input() stamp:any = 'watch here...'
  @Output() myEvent = new EventEmitter() // Output MUST be an event emitter (or descend from)
  myPic:string = 'https://via.placeholder.com/64/64'
  username:string = 'Ada'
  constructor() { }

  // event handlers for this component
  handleClick(){
    // we will emit our CUSTOM event, pasing data along with it
    this.myEvent.emit({data:this.username}) // we pass an object as the payload
  }

  ngOnInit(): void {
  }

}
