import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthAnalyzerControllerService } from './squish-growth-analyzer-controller.service';
import { SquishGrowthAnalyzerReadoutComponent } from './squish-growth-analyzer-readout/squish-growth-analyzer-readout.component';
import { SquishGrowthAnalyzerInputComponent } from './squish-growth-analyzer-input/squish-growth-analyzer-input.component';
import { SquishGrowthAnalyzerReadings } from '@site-types';

@Component({
  selector: 'squish-growth-analyzer-controller',
  standalone: true,
  imports: [
    CommonModule,
    SquishGrowthAnalyzerReadoutComponent,
    SquishGrowthAnalyzerInputComponent
  ],
  templateUrl: './squish-growth-analyzer-controller.component.html',
  styleUrls: ['./squish-growth-analyzer-controller.component.css']
})
export class SquishGrowthAnalyzerControllerComponent implements OnInit {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Readings!: SquishGrowthAnalyzerReadings;

  constructor(private dataService: SquishGrowthAnalyzerControllerService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a=> this.Readings = a);
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

}
