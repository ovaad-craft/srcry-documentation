import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef, NgZone, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthSettings } from '@site-types';
import { SquishGrowthAnalyzerService } from './squish-growth-analyzer.service';

@Component({
  selector: 'app-squish-growth-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-analyzer.component.html',
  styleUrls: ['./squish-growth-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SquishGrowthAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  Settings!: SquishGrowthSettings;

  @ViewChild('fullBox', {static: true, read: ElementRef}) FullBox!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef}) BaseBox!: ElementRef;
  @ViewChild('squishBoxW', {static: true, read: ElementRef}) SquishBoxW!: ElementRef;
  @ViewChild('squishBoxH', {static: true, read: ElementRef}) SquishBoxH!: ElementRef;

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

  private updateReadings():void{
    this.dataService.sendData({
      baseSizeW: this.BaseBox.nativeElement.offsetWidth,
      baseSizeH: this.BaseBox.nativeElement.offsetHeight,
      growthSizeW: this.SquishBoxW.nativeElement.offsetWidth,
      growthSizeH: this.SquishBoxH.nativeElement.offsetHeight,
      fullSizeW: this.FullBox.nativeElement.offsetWidth,
      fullSizeH: this.FullBox.nativeElement.offsetHeight
    });
  }

}
