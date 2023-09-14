import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeAnalyzerControllerService } from './base-size-analyzer-controller.service';
import { BaseSizeProps, BaseSizeValues } from '@site-types';

@Component({
  selector: 'base-size-analyzer-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-analyzer-controller.component.html',
  styleUrls: ['./base-size-analyzer-controller.component.css']
})
export class BaseSizeAnalyzerControllerComponent implements OnInit, OnDestroy {
  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Values!: BaseSizeProps;
  Readings!: BaseSizeValues;

  constructor(private dataService: BaseSizeAnalyzerControllerService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a => this.Readings = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }
}
