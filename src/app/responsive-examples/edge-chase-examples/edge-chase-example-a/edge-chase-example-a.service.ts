import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseExampleAService {

  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  constructor(private zone: NgZone) { }
}
