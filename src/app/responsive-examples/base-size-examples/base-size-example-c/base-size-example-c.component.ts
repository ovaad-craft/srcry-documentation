import { Component, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, AfterContentChecked, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeAnalyzerInterface } from '@site-types';
import { BaseSizeExampleCService } from './base-size-example-c.service';

@Component({
  selector: 'app-base-size-example-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-example-c.component.html',
  styleUrls: ['./base-size-example-c.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleCComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;

  @ViewChild('boxContainer', {static: true, read: ElementRef})BoxContainer!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef})BaseBox!: ElementRef;
  @ViewChild('chunkBox', {static: true, read: ElementRef})ChunkBox!: ElementRef;
  @ViewChild('sliceBox', {static: true, read: ElementRef})SliceBox!: ElementRef;

  constructor(private zone: NgZone, private dataService: BaseSizeExampleCService){}

  ngOnInit(): void {
      this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
  }
  
  ngAfterViewInit(): void {
    const frameListener: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=>this.readElementSizes());
    });
    
    frameListener.observe(this.BoxContainer.nativeElement);
  }

  ngAfterContentChecked(): void {
    this.readElementSizes();
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

  private readElementSizes():void{
    const readings: BaseSizeAnalyzerInterface = {
      fullWidth: this.BoxContainer.nativeElement.offsetWidth,
      baseWidth: this.BaseBox.nativeElement.offsetWidth,
      chunkWidth: this.ChunkBox.nativeElement.offsetWidth,
      sliceWidth: this.SliceBox.nativeElement.offsetWidth
    };

    this.dataService.sendData(readings);
  }

}
