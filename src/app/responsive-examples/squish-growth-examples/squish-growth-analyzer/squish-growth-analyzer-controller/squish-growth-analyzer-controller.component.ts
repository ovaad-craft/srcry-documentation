import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthAnalyzerControllerService } from './squish-growth-analyzer-controller.service';
import { SquishGrowthAnalyzerReadoutComponent } from './squish-growth-analyzer-readout/squish-growth-analyzer-readout.component';
import { SquishGrowthAnalyzerInputComponent } from './squish-growth-analyzer-input/squish-growth-analyzer-input.component';
import { SquishGrowthAnalyzerReadings, SquishGrowthData, SquishGrowthProps } from '@site-types';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { SquishGrowthPageService } from 'src/app/pages/squish-growth-page/squish-growth-page.service';

@Component({
  selector: 'squish-growth-analyzer-controller',
  standalone: true,
  imports: [
    CommonModule,
    SquishGrowthAnalyzerReadoutComponent,
    SquishGrowthAnalyzerInputComponent
  ],
  templateUrl: './squish-growth-analyzer-controller.component.html',
  styleUrls: ['./squish-growth-analyzer-controller.component.css']
})
export class SquishGrowthAnalyzerControllerComponent implements OnInit {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Readings!: SquishGrowthAnalyzerReadings;
  DefaultSettings!: SquishGrowthData;

  AnalyticsTrigger : boolean = false;

  constructor(
    private channelService: SquishGrowthPageService,
    private dataService: SquishGrowthAnalyzerControllerService,
    private gService: GoogleAnalyticsService
    ){}

  ngOnInit(): void {
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleB',
      defaultValues: true
    });
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaults();
  }

  public updateSettings(data: SquishGrowthProps): void{
    this.channelService.sendData(data, this.TargetName);
    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Squish Growth Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }

}
