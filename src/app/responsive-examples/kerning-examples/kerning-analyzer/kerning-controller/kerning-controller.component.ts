import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KerningControllerService } from './kerning-controller.service';
import { KerningReadoutComponent } from './kerning-readout/kerning-readout.component';
import { KerningInputComponent } from './kerning-input/kerning-input.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'kerning-controller',
  standalone: true,
  imports: [
    CommonModule,
    KerningReadoutComponent,
    KerningInputComponent
  ],
  templateUrl: './kerning-controller.component.html',
  styleUrls: ['./kerning-controller.component.css']
})
export class KerningControllerComponent implements OnInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  DefaultSetting! : number;
  Reading!        : number;

  AnalyticsTrigger : boolean = false;

  constructor(private dataService : KerningControllerService, private gService: GoogleAnalyticsService){}

  ngOnInit() : void {
    this.DefaultSetting = this.dataService.getDefault();
    this.dataService.Reading$.subscribe(a => this.Reading = a);
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy() : void {
    this.dataService.closeChannel();
  }

  public updateSetting(data : number) : void{
    this.dataService.sendData(data);

    if(!this.AnalyticsTrigger){
      this.gService.event('event', 'demonstration', 'Kerning Demo 02 Controller', undefined, true);
      this.AnalyticsTrigger = true;
    }
  }

}
