import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, NgZone, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeAnalyzerService } from './base-size-analyzer.service';
import { BaseSizeSettings, BaseSizeValues } from '@site-types';

@Component({
  selector: 'app-base-size-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-analyzer.component.html',
  styleUrls: ['./base-size-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;
  
  @ViewChild('fullBox', {static : true, read : ElementRef}) FullBox! : ElementRef;

  Settings! : BaseSizeSettings;

  constructor(private dataService : BaseSizeAnalyzerService, private zone : NgZone){}

  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a => this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit() : void {
    const frameListener: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=>{
        this.sendData();
      });
    });

    frameListener.observe(this.FullBox.nativeElement);
  }

  ngOnDestroy() : void {
      this.dataService.closeChannel();
  }

  

  private sendData() : void{
    const data: BaseSizeValues = {
      width  : this.FullBox.nativeElement.offsetWidth,
      height : this.FullBox.nativeElement.offsetHeight
    };

    this.dataService.sendData(data);
  }

}
