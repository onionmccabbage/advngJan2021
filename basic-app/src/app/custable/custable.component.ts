import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custable',
  templateUrl: './custable.component.html',
  styleUrls: ['./custable.component.css']
})
export class CustableComponent implements OnInit {

  @Input() headerTemplate:TemplateRef<any>
  @Input() bodyTemplate:TemplateRef<any>
  @Input() footerTemplate:TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

}
