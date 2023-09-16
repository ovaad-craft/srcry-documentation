import { Component, Input, OnInit, AfterViewInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef, NgZone, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeAnalyzerService } from './line-size-analyzer.service';

@Component({
  selector: 'app-line-size-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-size-analyzer.component.html',
  styleUrls: ['./line-size-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineSizeAnalyzerComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  @ViewChild('frame', {static: true, read: ElementRef}) Frame!: ElementRef;
  @ViewChild('measurementBox', {static: true, read: ElementRef}) MeasurementBox!: ElementRef;

  LineSize!: string;

  constructor(
    private dataService: LineSizeAnalyzerService,
    private zone: NgZone
  ){}

  ngOnInit(): void {
      this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
      this.dataService.CurrentSize$.subscribe(a=> this.LineSize = a);
  }

  ngAfterViewInit(): void {
    const frameListener = new ResizeObserver((element)=>{
      this.zone.run(()=>{
        this.updateSize();
      });
    });
    
    frameListener.observe(this.Frame.nativeElement);
  }

  ngAfterViewChecked(): void {
      this.updateSize();
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

  private updateSize():void{
    this.dataService.sendData(this.MeasurementBox.nativeElement.offsetWidth);
  }

}
