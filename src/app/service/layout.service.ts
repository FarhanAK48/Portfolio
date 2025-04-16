import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }
  private messageSubject = new Subject<string>();

  message$ = this.messageSubject.asObservable();

  sendTab(value:string){
    this.messageSubject.next(value);
  }

}
