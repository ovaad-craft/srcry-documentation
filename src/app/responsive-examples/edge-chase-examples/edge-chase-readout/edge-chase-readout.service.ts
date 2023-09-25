import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseReadoutService {

  private DataChannel!: BroadcastChannelEventMap;
  private ChannelName!: string;
  
  constructor() { }
}
