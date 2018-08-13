import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TimeAgoPipe } from 'time-ago-pipe';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { registerLocaleData } from '@angular/common';


import localePl from '@angular/common/locales/pl';
import { SignalrService } from './services/signalr.service';

registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    TimeAgoPipe
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pl' }, SignalrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
