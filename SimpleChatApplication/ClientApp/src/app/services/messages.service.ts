import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../Models/message.model';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService implements OnInit {

  baseUrl = environment.globalBaseUrl + '/api/Messages/';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  sendMessage(message: Message) {

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };

    return this.http.post(this.baseUrl, JSON.stringify(message), options);
  }
}
