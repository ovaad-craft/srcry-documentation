import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzerInputService } from './analyzer-input.service';
import { BoxAnalyzerInterface, BoxSizeInterface } from '@site-types';
import { BoxSizeSelectorComponent } from './box-size-selector/box-size-selector.component';
import { PropDisplayComponent } from '../../../../layout/prop-display/prop-display.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'analyzer-input',
  standalone: true,
  imports: [CommonModule, BoxSizeSelectorComponent, PropDisplayComponent],
  templateUrl: './analyzer-input.component.html',
  styleUrls: ['./analyzer-input.component.css']
})
export class AnalyzerInputComponent implements OnInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Output() AnalyticsTrigger : EventEmitter<void> = new EventEmitter<void>();

  BoxReadings! : BoxAnalyzerInterface;
  CurrentSize! : BoxSizeInterface;

  AnalyticsTriggered : boolean = false;

  constructor(private dataService : AnalyzerInputService, private gService: GoogleAnalyticsService){}

  ngOnInit(): void {
      this.dataService.createDataChannel(this.BroadcastName, this.ChannelName);
      this.dataService.BoxReadings$.subscribe(a => this.BoxReadings = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeDataChannel();
  }

  public updateCurrentSize(size: BoxSizeInterface):void{
    this.CurrentSize = size;
    this.dataService.sendData(size);
    
    if(!this.AnalyticsTriggered){
      this.gService.event('event', 'demonstration', 'Box Size Demo 03 Controller', undefined, true);
      this.AnalyticsTriggered = true;
    }
  }

}
