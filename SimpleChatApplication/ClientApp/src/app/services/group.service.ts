import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../models/group.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  baseUrl = environment.globalBaseUrl + '/api/Groups/';

  constructor(private http: HttpClient) { }

  createNewGroup(connectionId: string ): Observable<Group> {

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post<Group>(this.baseUrl + 'CreateNewGroup', JSON.stringify(connectionId), options);
  }

  joinToExistingGroup(connectionId: string, groupId: string ): Observable<Group> {

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };

    const groupDto: any = {
      connectionId: connectionId,
      id: groupId
    };
    return this.http.post<Group>(this.baseUrl + 'JoinToExistingGroup', JSON.stringify(groupDto), options);
  }
}
