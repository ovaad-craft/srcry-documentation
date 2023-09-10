import { AfterContentChecked, AfterViewInit, Component, Input, ElementRef, NgZone, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeExampleDService } from './base-size-example-d.service';
import { BaseSizeAnalyzerInterface } from '@site-types';

@Component({
  selector: 'app-base-size-example-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-example-d.component.html',
  styleUrls: ['./base-size-example-d.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleDComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;

  @ViewChild('fullBox', {static: true, read: ElementRef})FullBox!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef})BaseBox!: ElementRef;
  @ViewChild('chunkBox', {static: true, read: ElementRef})ChunkBox!: ElementRef;

  constructor(private zone: NgZone, private dataChannel: BaseSizeExampleDService){}

  ngOnInit(): void {
    this.dataChannel.createChannel(this.BroadcastName, this.ChannelName);
  }

  ngAfterViewInit(): void {
    const frame: ResizeObserver = new ResizeObserver((item)=>{
      this.zone.run(()=>{
        this.readElements();
      });
    });

    frame.observe(this.FullBox.nativeElement);      
  }

  ngAfterContentChecked(): void {
    this.readElements();
  }

  ngOnDestroy(): void {
      this.dataChannel.closeChannel();
  }

  private readElements():void{
    const sizes: BaseSizeAnalyzerInterface = {
      baseWidth: this.BaseBox.nativeElement.offsetWidth,
      chunkWidth: this.ChunkBox.nativeElement.offsetWidth
    };

    this.dataChannel.sendData(sizes);
  }

}
