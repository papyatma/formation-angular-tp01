import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// une classe qui est exportée
export class AppComponent {
  public title:string = 'Angular 11';
  public duree:number = 4;
}
