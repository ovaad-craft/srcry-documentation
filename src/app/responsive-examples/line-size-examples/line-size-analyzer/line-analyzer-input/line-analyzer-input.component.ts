import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineAnalyzerSelectorComponent } from './line-analyzer-selector/line-analyzer-selector.component';
import { LineAnalyzerInputService } from './line-analyzer-input.service';
import { PropDisplayComponent } from 'src/app/layout/prop-display/prop-display.component';
import { LineSizes } from '@site-types';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'line-analyzer-input',
  standalone: true,
  imports: [CommonModule, LineAnalyzerSelectorComponent, PropDisplayComponent],
  templateUrl: './line-analyzer-input.component.html',
  styleUrls: ['./line-analyzer-input.component.css']
})
export class LineAnalyzerInputComponent implements OnInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;

  LineSizeReadout : number    = 0;
  SelectedSize    : LineSizes = 'narrow';

  AnalyticsTrigger : boolean = false;

  constructor(private dataService: LineAnalyzerInputService, private gService: GoogleAnalyticsService){}

  ngOnInit() : void {
      this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
      this.dataService.ReadoutValue$.subscribe(a => this.LineSizeReadout = a);
  }

  ngOnDestroy() : void {
      this.dataService.closeChannel();
  }

  public updateSize(size : LineSizes) : void{
    this.SelectedSize = size;
    this.dataService.sendData(size);
    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Line Size Library Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }

}
