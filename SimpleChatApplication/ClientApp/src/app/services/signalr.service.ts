import { Injectable, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { environment } from '../environment';
import { Message } from '../Models/message.model';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {

  private _hubConnection: HubConnection;
  connectionId: string;

  reciveMessage(): Message[] {
    const incommingMessages: Message[] = [];

    this._hubConnection.on('MessageRecive', (message: Message) => {
      if (this.connectionId !== message.connectionId) {
        message.isMyMessage = false;
        incommingMessages.push(message);
      } else {
        message.isMyMessage = true;
        incommingMessages.push(message);
      }
    });

    return incommingMessages;
  }

  constructor() {
    console.log('New instance of signalr was created.');
    this._hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(environment.globalBaseUrl + '/chat')
    .build();

    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('OnConnected', (connectionId: string) => {
      this.connectionId = connectionId;
      console.log('Your connectionId is: ' + connectionId.toString());
    });
   }
}
