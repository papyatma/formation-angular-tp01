import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-image',
  templateUrl: './composant-image.component.html',
  styleUrls: ['./composant-image.component.css']
})

// classe qui implemente une interface ==> canvas == guide
export class ComposantImageComponent implements OnInit {

  // Etape 0 => props ou STATES
  public title:string = 'Liste des Plongées !';

  // Array de type string
  public divesArray:string[] = ['fond1.jpg','fond2.jpg','fond3.jpg','fond4.jpg','fond5.jpg'];

  public flag:boolean = false;
  public connected:boolean = true;
  public formation:string = "Angular Version 11";

  // Etape 1 => constructeur
  constructor() { }

  // etape 2 = ngOnInit (livecircle)
  ngOnInit(): void {
  }

}
