import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStatusService {

  constructor() { }

  status = new BehaviorSubject<'done' | 'progress' | 'none'>('none');

  changeStatus(status: 'done' | 'progress' | 'none') {
    this.status.next(status);
  }
}
