import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeCReadoutService } from './base-size-c-readout.service';
import { BaseSizeAnalyzerInterface } from '@site-types';
import { BaseSizePageService } from 'src/app/pages/base-size-page/base-size-page.service';

@Component({
  selector: 'base-size-c-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-c-readout.component.html',
  styleUrls: ['./base-size-c-readout.component.css']
})
export class BaseSizeCReadoutComponent implements OnInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  Readings! : BaseSizeAnalyzerInterface;

  constructor(
    private dataChannel : BaseSizeCReadoutService,
    private channelService: BaseSizePageService
    ){}

  ngOnInit(): void {
    //this.dataChannel.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleC',
      defaultValues: false
    });
    this.dataChannel.Readings$.subscribe(a=> this.Readings = a);
  }

  ngOnDestroy(): void {
    //this.dataChannel.closeChannel();
  }

}
