import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {
  apiUrl = 'https://www.mocky.io/v2/5d73bf3d3300003733081869';

  constructor(private http: HttpClient) { }

  getManagers(){
    return this.http.get(this.apiUrl);
  }

}
