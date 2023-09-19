import { Injectable, NgZone } from '@angular/core';
import { CrushGapPropData } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class CrushGapControllerService {

  constructor(private zone: NgZone) { }

  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  DefaultSettings: CrushGapPropData = {
    crushGapW: {size:'xTiny', scale: '1', speed: '4'},
    crushGapWNudgeChunk: 0,
    crushGapWNudgeSlice: 0,
    crushGapH: {size:'xTiny', scale: '2', speed: '4'},
    crushGapHNudgeChunk: 0,
    crushGapHNudgeSlice: 0
  }
}
