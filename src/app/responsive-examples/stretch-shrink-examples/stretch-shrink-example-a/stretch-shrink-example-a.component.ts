import { Component, ElementRef, Input, ViewChild, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkExampleAService } from './stretch-shrink-example-a.service';

@Component({
  selector: 'stretch-shrink-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-example-a.component.html',
  styleUrls: ['./stretch-shrink-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StretchShrinkExampleAComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  @ViewChild('boxFrame', {static: true, read: ElementRef}) BoxFrame!: ElementRef;
  @ViewChild('box', {static: true, read: ElementRef}) Box!: ElementRef;
  @ViewChild('shrinkBox', {static: true, read: ElementRef}) ShrinkBox!: ElementRef;

  constructor(private dataService: StretchShrinkExampleAService, private zone: NgZone){}

  ngOnInit(): void {
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
    const frameListener: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=> this.readElements());
    });

    frameListener.observe(this.BoxFrame.nativeElement);
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

  private readElements():void{
    this.dataService.sendData({
      height: this.Box.nativeElement.offsetHeight,
      shrinkAmountH: this.ShrinkBox.nativeElement.offsetHeight
    });
  }

}
