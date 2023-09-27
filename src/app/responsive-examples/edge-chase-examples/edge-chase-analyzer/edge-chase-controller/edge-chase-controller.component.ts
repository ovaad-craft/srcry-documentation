import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseControllerService } from './edge-chase-controller.service';
import { EdgeChaseData, EdgeChaseSettings, SrcryPropReadings } from '@site-types';

@Component({
  selector: 'edge-chase-controller',
  standalone: true,
  imports: [CommonModule],
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
}
