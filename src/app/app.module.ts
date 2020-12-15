import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// IMPORT LOCAUX
import { AppComponent } from './app.component';
import { Composant2Component } from './composant2/composant2.component';
import { ComposantImageComponent } from './composant-image/composant-image.component';
import { ClientsModule } from './clients/clients.module';

// décorateur de classe qui transforme la classe en module
@NgModule({
  declarations: [
    // déclaration de tous les composants utilisés par le module
    AppComponent,
    Composant2Component,
    ComposantImageComponent
  ],
  imports: [
    BrowserModule,
    ClientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // charge ou bootstrap un tout premier composant
})
export class AppModule { }
