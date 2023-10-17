import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkExampleAReadoutService } from './stretch-shrink-example-a-readout.service';
import { StretchShrinkReadings } from '@site-types';

@Component({
  selector: 'stretch-shrink-example-a-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-example-a-readout.component.html',
  styleUrls: ['./stretch-shrink-example-a-readout.component.css']
})
export class StretchShrinkExampleAReadoutComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Readings!: StretchShrinkReadings;

  constructor(private dataService: StretchShrinkExampleAReadoutService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
