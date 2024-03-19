import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseControllerService } from './edge-chase-controller.service';
import { EdgeChaseData, EdgeChaseProps, SrcryPropReadings } from '@site-types';
import { EdgeChaseAnalyzerReadoutComponent } from './edge-chase-analyzer-readout/edge-chase-analyzer-readout.component';
import { EdgeChaseInputComponent } from './edge-chase-input/edge-chase-input.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { EdgeChasePageService } from 'src/app/pages/edge-chase-page/edge-chase-page.service';

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
export class EdgeChaseControllerComponent implements OnInit {

  @Input() BrodcastName! : string;
  @Input() ChannelName!  : string;
  @Input() TargetName!   : string;

  DefaultSettings! : EdgeChaseData;
  Readings!        : SrcryPropReadings;

  AnalyticsTrigger : boolean = false;

  constructor(
    private channelService: EdgeChasePageService,
    private dataService : EdgeChaseControllerService,
    private gService: GoogleAnalyticsService
    ){}

  ngOnInit() : void {
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleB',
      defaultValues: true
    });
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaultSettings();
  }

  public updateData(data : EdgeChaseProps) : void{
    this.channelService.sendData({
      ...data,
      edgeChaseW : `var(--${data.edgeChaseW})`,
      edgeChaseH : `var(--${data.edgeChaseH})`,
      chaseStopW : `var(--${data.chaseStopW})`,
      chaseStopH : `var(--${data.chaseStopH})`

    }, this.TargetName);

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Edge Chase Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }
}
