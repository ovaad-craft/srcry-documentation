import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthSettings } from '@site-types';
import { SquishGrowthAnalyzerService } from './squish-growth-analyzer.service';

@Component({
  selector: 'app-squish-growth-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-analyzer.component.html',
  styleUrls: ['./squish-growth-analyzer.component.css']
})
export class SquishGrowthAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Settings!: SquishGrowthSettings;

  constructor(private zone: NgZone, private dataService: SquishGrowthAnalyzerService){}

  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a=> this.Settings = a);
    this.dataService.createDataChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
