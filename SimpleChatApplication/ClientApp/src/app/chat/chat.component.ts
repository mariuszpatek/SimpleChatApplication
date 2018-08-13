import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { MessagesService } from '../services/messages.service';
import { Message } from '../Models/Message.model';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environment';
import { SignalrService } from '../services/signalr.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  constructor(private messageService: MessagesService, private signalrService: SignalrService, private groupService: GroupService) { }

  selectedGroupId: string;
  groups: Group[] = [];
  error: string;
  messageValue: string;
  private _hubConnection: HubConnection;
  incommingMessages: Message[] = [];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngOnInit(): void {
      this.scrollToBottom();
      this.error = '';
      this.incommingMessages = this.signalrService.reciveMessage();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  onSendMessage(messageBody: string) {
    const message: Message = new Message();
    message.body = messageBody;
    message.connectionId = this.signalrService.connectionId;
    message.groupId = this.selectedGroupId;
    this.messageService.sendMessage(message).subscribe(
      resp => {
        this.messageValue = '';
      },
      (err: HttpErrorResponse) => {
        console.log('Erros occured during adding routine: ', err);
      }
    );
  }

  onCreateGroup(connectionId: string) {
    console.log('Creating group for connectionId: ' + this.signalrService.connectionId);
    this.groupService.createNewGroup(this.signalrService.connectionId).subscribe(
      resp => {
        const group = new Group();
        group.id = resp.id;
        this.selectedGroupId = resp.id;
        this.groups.push(group);
      },
      (err: HttpErrorResponse) => {
        console.log('Erros occured during create new group: ', err);
      }
    );
  }

  onJoinToGroup(form: NgForm) {
    const groupId = form.value.groupId;
    console.log('Joining to group: ' + groupId);
    this.groupService.joinToExistingGroup(this.signalrService.connectionId, groupId).subscribe(
      resp => {
        const group = new Group();
        group.id = groupId;
        this.selectedGroupId = groupId;
        this.groups.push(group);
        this.error = '';
        form.reset();
      },
      (err: HttpErrorResponse) => {
        this.error = `Nie udało się dołączyć do grupy.
          Upewnij się czy wskazana grupa istnieje lub czy przypadkiem już do niej nie należysz.`;
        form.reset();
      }
    );
  }

  onSelectedGroup(group: Group) {
    this.selectedGroupId = group.id;
  }
}
