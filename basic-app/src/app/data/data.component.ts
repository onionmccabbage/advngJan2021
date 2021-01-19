import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
// declare properties for this component
  @Output() dataEvent = new EventEmitter() // Output MUST be an event emitter (or descend from)
  id:string = '1'
  category:string = 'users'
  @Input() buttonLabel = 'Ready'
  constructor() { }

  // event handlers for this component
  sendContact(){
    // we will emit our CUSTOM event, pasing data along with it
    this.dataEvent.emit({data:{id:this.id, category:this.category}}) // we pass an object as the payload
  }

  ngOnInit(): void {
  }

}
