import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-use-async',
  templateUrl: './use-async.component.html',
  styleUrls: ['./use-async.component.css']
})
export class UseAsyncComponent {
  time = new Observable<string>( (observer) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
