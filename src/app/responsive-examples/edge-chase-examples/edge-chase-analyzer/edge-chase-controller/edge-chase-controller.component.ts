import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseControllerService } from './edge-chase-controller.service';
import { EdgeChaseData, EdgeChaseProps, EdgeChaseSettings, SrcryPropReadings } from '@site-types';
import { EdgeChaseAnalyzerReadoutComponent } from './edge-chase-analyzer-readout/edge-chase-analyzer-readout.component';
import { EdgeChaseInputComponent } from './edge-chase-input/edge-chase-input.component';

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
export class EdgeChaseControllerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BrodcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  DefaultSettings!: EdgeChaseData;
  Readings!: SrcryPropReadings;

  constructor(private dataService: EdgeChaseControllerService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaultSettings();
    this.dataService.createBroadcastChannel(this.BrodcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
      
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

  public updateData(data: EdgeChaseProps):void{
    this.dataService.sendData({
      edgeChaseW: `var(--${data.edgeChaseW})`,
      edgeChaseWNudgeChunk: data.edgeChaseWNudgeChunk,
      edgeChaseWNudgeSlice: data.edgeChaseWNudgeSlice,
      edgeChaseH: `var(--${data.edgeChaseH})`,
      edgeChaseHNudgeChunk: data.edgeChaseHNudgeChunk,
      edgeChaseHNudgeSlice: data.edgeChaseHNudgeSlice,
      chaseStopW: `var(--${data.chaseStopW})`,
      chaseStopWNudgeChunk: data.chaseStopWNudgeChunk,
      chaseStopWNudgeSlice: data.chaseStopWNudgeSlice,
      chaseStopH: `var(--${data.chaseStopH})`,
      chaseStopHNudgeChunk: data.chaseStopHNudgeChunk,
      chaseStopHNudgeSlice: data.chaseStopHNudgeSlice

    });
  }
}
