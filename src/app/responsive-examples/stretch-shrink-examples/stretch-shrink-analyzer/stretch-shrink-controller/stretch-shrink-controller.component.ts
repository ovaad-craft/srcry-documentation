import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkControllerService } from './stretch-shrink-controller.service';
import { StretchShrinkData, StretchShrinkProps, StretchShrinkReadings, StretchShrinkSettings } from '@site-types';
import { StretchShrinkReadoutComponent } from './stretch-shrink-readout/stretch-shrink-readout.component';
import { StretchShrinkInputComponent } from './stretch-shrink-input/stretch-shrink-input.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'stretch-shrink-controller',
  standalone: true,
  imports: [
    CommonModule,
    StretchShrinkReadoutComponent,
    StretchShrinkInputComponent
  ],
  templateUrl: './stretch-shrink-controller.component.html',
  styleUrls: ['./stretch-shrink-controller.component.css']
})
export class StretchShrinkControllerComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Readings!: StretchShrinkReadings;
  DefaultSettings!: StretchShrinkData;

  AnalyticsTrigger : boolean = false;

  constructor(private dataService: StretchShrinkControllerService, private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a => this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaults();
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

  public updateSettings(data: StretchShrinkProps): void{
    this.dataService.sendData(data);

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Stretch Shrink Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }

}
