import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {

  status: string = 'online';

  constructor() { }

  setStatusOnline () {
    this.status = 'online';
  }

  setStatusSummarizing () {
    this.status = 'summarizing';
  }

  setStatusOffline () {
    this.status = 'offline';
  }

}
