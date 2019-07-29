import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastilleroComponent } from './pastillero/pastillero.component';
import { ListaPastillasComponent } from './lista-pastillas/lista-pastillas.component';

@NgModule({
  declarations: [
    AppComponent,
    PastilleroComponent,
    ListaPastillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
