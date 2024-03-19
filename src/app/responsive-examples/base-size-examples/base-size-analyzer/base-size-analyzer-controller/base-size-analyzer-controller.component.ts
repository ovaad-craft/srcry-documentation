import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeAnalyzerControllerService } from './base-size-analyzer-controller.service';
import { BaseSizePropData, BaseSizeProps, BaseSizeSettings, BaseSizeValues } from '@site-types';
import { BaseSizeInputComponent } from './base-size-input/base-size-input.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BaseSizePageService } from 'src/app/pages/base-size-page/base-size-page.service';

@Component({
  selector: 'base-size-analyzer-controller',
  standalone: true,
  imports: [CommonModule, BaseSizeInputComponent],
  templateUrl: './base-size-analyzer-controller.component.html',
  styleUrls: ['./base-size-analyzer-controller.component.css']
})
export class BaseSizeAnalyzerControllerComponent implements OnInit, OnDestroy {
  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  Values!   : BaseSizeProps;
  Readings! : BaseSizeValues;

  DefaultSettings! : BaseSizePropData;

  AnalyticsTrigger : boolean = false;

  constructor(
    private dataService : BaseSizeAnalyzerControllerService,
    private channelService : BaseSizePageService,
    private gService: GoogleAnalyticsService
    ){}

  ngOnInit() : void {
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleE',
      defaultValues: true
    });
    this.dataService.Readings$.subscribe(a => this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaultSettings();
    //this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy(): void {
      //this.dataService.closeChannel();
  }

  public updateValues(value: BaseSizeProps):void{
    this.channelService.sendData(value, this.TargetName);

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Base Size Page Demo 05 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }
}
