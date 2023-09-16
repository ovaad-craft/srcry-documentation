import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeCReadoutService } from './base-size-c-readout.service';
import { BaseSizeAnalyzerInterface } from '@site-types';

@Component({
  selector: 'base-size-c-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-c-readout.component.html',
  styleUrls: ['./base-size-c-readout.component.css']
})
export class BaseSizeCReadoutComponent implements OnInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Readings!: BaseSizeAnalyzerInterface;

  constructor(private dataChannel: BaseSizeCReadoutService){}

  ngOnInit(): void {
    this.dataChannel.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
    this.dataChannel.Readings$.subscribe(a=> this.Readings = a);
  }

  ngOnDestroy(): void {
    this.dataChannel.closeChannel();
  }

}
