import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkExampleAReadoutService } from './stretch-shrink-example-a-readout.service';
import { StretchShrinkReadings } from '@site-types';
import { StretchShrinkPageService } from 'src/app/pages/stretch-shrink-page/stretch-shrink-page.service';

@Component({
  selector: 'stretch-shrink-example-a-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-example-a-readout.component.html',
  styleUrls: ['./stretch-shrink-example-a-readout.component.css']
})
export class StretchShrinkExampleAReadoutComponent implements OnInit {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Readings!: StretchShrinkReadings;

  constructor(
    private channelService: StretchShrinkPageService,
    private dataService: StretchShrinkExampleAReadoutService
    ){}

  ngOnInit(): void {
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleA',
      defaultValues: false
    });
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    //this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  /*ngOnDestroy(): void {
      this.dataService.closeChannel();
  }*/

}
