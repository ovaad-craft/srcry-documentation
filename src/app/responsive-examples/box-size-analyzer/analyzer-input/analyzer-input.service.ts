import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerInputService {

  DataChannel!: BroadcastChannel;
  ComponentChannel: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  public createDataChannel(dataChannelName: string, componentChannelName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ComponentChannel.next(componentChannelName);
  }

  public closeDataChannel():void{ this.DataChannel.close(); }
}
