import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadingControllerService } from './leading-controller.service';
import { LeadingInputComponent } from './leading-input/leading-input.component';
import { LeadingReadoutComponent } from './leading-readout/leading-readout.component';

@Component({
  selector: 'leading-controller',
  standalone: true,
  imports:[ 
  CommonModule,
  LeadingInputComponent,
  LeadingReadoutComponent
  ],
  templateUrl: './leading-controller.component.html',
  styleUrls: ['./leading-controller.component.css']
})
export class LeadingControllerComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  DefaultSetting!: number;
  Reading!: number;

  constructor(private dataService: LeadingControllerService){}

  ngOnInit(): void {
    this.DefaultSetting = this.dataService.getDefault();
    this.dataService.Reading$.subscribe(a => this.Reading = a);
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

  public updateSetting(data: number):void{
    this.dataService.sendData(data);
  }

}
