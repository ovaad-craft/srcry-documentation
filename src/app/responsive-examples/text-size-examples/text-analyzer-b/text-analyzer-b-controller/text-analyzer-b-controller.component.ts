import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnalyzerBControllerService } from './text-analyzer-b-controller.service';
import { TextAnalyzerBReadoutComponent } from './text-analyzer-b-readout/text-analyzer-b-readout.component';
import { TextSizeAnalyzerBInputComponent } from './text-size-analyzer-b-input/text-size-analyzer-b-input.component';
import { TextAnalyzerBData, TextAnalyzerBInterface } from '@site-types';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'text-analyzer-b-controller',
  standalone: true,
  imports: [
    CommonModule,
    TextAnalyzerBReadoutComponent,
    TextSizeAnalyzerBInputComponent
  ],
  templateUrl: './text-analyzer-b-controller.component.html',
  styleUrls: ['./text-analyzer-b-controller.component.css']
})
export class TextAnalyzerBControllerComponent implements OnInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Reading!: number;
  DefaultSettings!: TextAnalyzerBData;

  AnalyticsTrigger : boolean = false;

  constructor(private dataService: TextAnalyzerBControllerService, private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
    this.dataService.Reading$.subscribe(a => this.Reading = a);
    this.DefaultSettings = this.dataService.getDefaults();
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

  public updateSettings(settings: TextAnalyzerBInterface):void{
    this.dataService.sendData(settings);

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Text Size Page Demo 01 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }

}
