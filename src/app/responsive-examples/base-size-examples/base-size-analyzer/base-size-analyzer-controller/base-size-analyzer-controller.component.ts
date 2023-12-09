import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeAnalyzerControllerService } from './base-size-analyzer-controller.service';
import { BaseSizePropData, BaseSizeProps, BaseSizeSettings, BaseSizeValues } from '@site-types';
import { BaseSizeInputComponent } from './base-size-input/base-size-input.component';

@Component({
  selector: 'base-size-analyzer-controller',
  standalone: true,
  imports: [CommonModule, BaseSizeInputComponent],
  templateUrl: './base-size-analyzer-controller.component.html',
  styleUrls: ['./base-size-analyzer-controller.component.css']
})
export class BaseSizeAnalyzerControllerComponent implements OnInit, OnDestroy {
  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  Values!   : BaseSizeProps;
  Readings! : BaseSizeValues;

  DefaultSettings! : BaseSizePropData;

  constructor(private dataService : BaseSizeAnalyzerControllerService){}

  ngOnInit() : void {
    this.dataService.Readings$.subscribe(a => this.Readings = a);
    this.DefaultSettings = this.dataService.getDefaultSettings();
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

  public updateValues(value: BaseSizeProps):void{
    this.dataService.sendData(value);
  }
}
