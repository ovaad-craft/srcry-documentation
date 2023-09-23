import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapInputComponent } from './crush-gap-input/crush-gap-input.component';
import { CrushGapControllerService } from './crush-gap-controller.service';
import { CrushGapPropData, CrushGapProps, CrushGapReadings, CrushGapSettings } from '@site-types';
import { CrushGapReadoutComponent } from './crush-gap-readout/crush-gap-readout.component';

@Component({
  selector: 'crush-gap-controller',
  standalone: true,
  imports: [CommonModule, CrushGapReadoutComponent ,CrushGapInputComponent],
  templateUrl: './crush-gap-controller.component.html',
  styleUrls: ['./crush-gap-controller.component.css']
})
export class CrushGapControllerComponent implements OnInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Readings!: CrushGapReadings;

  DefaultSettings!: CrushGapPropData;

  constructor(private dataService: CrushGapControllerService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
    this.DefaultSettings = this.dataService.getDefaultSettings();
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

  public updateData(data: CrushGapProps):void{
    const props: CrushGapSettings = {
      crushGapW: `var(--${data.crushGapW})`,
      crushGapWNudgeChunk: data.crushGapWNudgeChunk,
      crushGapWNudgeSlice: data.crushGapWNudgeSlice,
      crushGapH: `var(--${data.crushGapH})`,
      crushGapHNudgeChunk: data.crushGapHNudgeChunk,
      crushGapHNudgeSlice: data.crushGapHNudgeSlice
    };

    this.dataService.sendData(props);
  }

}
