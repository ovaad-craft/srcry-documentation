import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseControllerService } from './edge-chase-controller.service';
import { EdgeChaseData, EdgeChaseProps, SrcryPropReadings } from '@site-types';
import { EdgeChaseAnalyzerReadoutComponent } from './edge-chase-analyzer-readout/edge-chase-analyzer-readout.component';
import { EdgeChaseInputComponent } from './edge-chase-input/edge-chase-input.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'edge-chase-controller',
  standalone: true,
  imports: [
    CommonModule,
    EdgeChaseAnalyzerReadoutComponent,
    EdgeChaseInputComponent
  ],
  templateUrl: './edge-chase-controller.component.html',
  styleUrls: ['./edge-chase-controller.component.css']
})
export class EdgeChaseControllerComponent implements OnInit, OnDestroy {

  @Input() BrodcastName! : string;
  @Input() ChannelName!  : string;
  @Input() TargetName!   : string;

  DefaultSettings! : EdgeChaseData;
  Readings!        : SrcryPropReadings;

  AnalyticsTrigger : boolean = false;

  constructor(private dataService : EdgeChaseControllerService, private gService: GoogleAnalyticsService){}

  ngOnInit() : void {
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaultSettings();
    this.dataService.createBroadcastChannel(this.BrodcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy() : void {
    this.dataService.closeChannel();
  }

  public updateData(data : EdgeChaseProps) : void{
    this.dataService.sendData({
      ...data,
      edgeChaseW : `var(--${data.edgeChaseW})`,
      edgeChaseH : `var(--${data.edgeChaseH})`,
      chaseStopW : `var(--${data.chaseStopW})`,
      chaseStopH : `var(--${data.chaseStopH})`,

    });

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Edge Chase Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }
}
