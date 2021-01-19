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

  constructor() { }

  ngOnInit(): void {
  }

}
