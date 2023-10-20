import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkAnalyzerService } from './stretch-shrink-analyzer.service';
import { StretchShrinkSettings } from '@site-types';

@Component({
  selector: 'app-stretch-shrink-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-analyzer.component.html',
  styleUrls: ['./stretch-shrink-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StretchShrinkAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  
  @ViewChild('box', {static: true, read: ElementRef}) Box!: ElementRef;
  @ViewChild('coreBox', {static: true, read: ElementRef}) CoreBox!: ElementRef;

  Settings!: StretchShrinkSettings;

  constructor(private dataService: StretchShrinkAnalyzerService, private zone: NgZone){}

  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a=> this.Settings = a);
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
    const frameListener: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=>{ this.updateReadings() });
    });

    frameListener.observe(this.Box.nativeElement);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

  private updateReadings():void{
    this.dataService.sendData({
      width: this.Box.nativeElement.offsetWidth,
      shrinkAmountW: this.CoreBox.nativeElement.offsetWidth - this.Box.nativeElement.offsetWidth,
      height: this.Box.nativeElement.offsetHeight,
      shrinkAmountH: this.CoreBox.nativeElement.offsetHeight - this.Box.nativeElement.offsetHeight
    });
  }

}
