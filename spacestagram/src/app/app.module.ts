import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { ImageCardComponent } from './image-card/image-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponent,
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
