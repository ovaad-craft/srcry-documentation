import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeExampleDService } from '../base-size-example-d.service';
import { BaseSizeAnalyzerInterface } from '@site-types';
import { BaseExampleDReadoutService } from './base-example-d-readout.service';

@Component({
  selector: 'base-example-d-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-example-d-readout.component.html',
  styleUrls: ['./base-example-d-readout.component.css']
})
export class BaseExampleDReadoutComponent implements OnInit, OnDestroy {
  
  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Readings!: BaseSizeAnalyzerInterface;

  constructor(private dataService: BaseExampleDReadoutService){}

  ngOnInit(): void {
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
      this.dataService.Readings$.subscribe(a=> this.Readings = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
