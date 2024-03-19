import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapInputComponent } from './crush-gap-input/crush-gap-input.component';
import { CrushGapControllerService } from './crush-gap-controller.service';
import { CrushGapPropData, CrushGapProps, SrcryPropReadings, CrushGapSettings } from '@site-types';
import { CrushGapReadoutComponent } from './crush-gap-readout/crush-gap-readout.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { CrushGapPageService } from 'src/app/pages/crush-gap-page/crush-gap-page.service';

@Component({
  selector: 'crush-gap-controller',
  standalone: true,
  imports: [CommonModule, CrushGapReadoutComponent ,CrushGapInputComponent],
  templateUrl: './crush-gap-controller.component.html',
  styleUrls: ['./crush-gap-controller.component.css']
})
export class CrushGapControllerComponent implements OnInit {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  Readings! : SrcryPropReadings;

  DefaultSettings! : CrushGapPropData;

  AnalyticsTrigger: boolean = false;

  constructor(
    private channelService: CrushGapPageService,
    private dataService : CrushGapControllerService,
    private gService: GoogleAnalyticsService
    ){}

  ngOnInit() : void {
    this.channelService.createRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleB',
      defaultValues: true
    });
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    //this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
    this.DefaultSettings = this.dataService.getDefaultSettings();
  }

  /*ngOnDestroy() : void {
      this.dataService.closeChannel();
  }*/

  public updateData(data : CrushGapProps) : void{
    const props : CrushGapSettings = {
      crushGapW           : `var(--${data.crushGapW})`,
      crushGapWNudgeChunk : data.crushGapWNudgeChunk,
      crushGapWNudgeSlice : data.crushGapWNudgeSlice,
      crushGapH           : `var(--${data.crushGapH})`,
      crushGapHNudgeChunk : data.crushGapHNudgeChunk,
      crushGapHNudgeSlice : data.crushGapHNudgeSlice
    };

    this.channelService.sendData(props, this.TargetName);

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Crush Gap Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }

}
