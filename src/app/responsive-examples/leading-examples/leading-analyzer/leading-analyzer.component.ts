import { Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadingAnalyzerService } from './leading-analyzer.service';

@Component({
  selector: 'app-leading-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leading-analyzer.component.html',
  styleUrls: ['./leading-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LeadingAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Setting!: number;

  @ViewChild('measurementBox', {static: true, read: ElementRef}) MeasurementBox!: ElementRef;

  constructor(private zone: NgZone, private dataService: LeadingAnalyzerService){}

  ngOnInit(): void {
    this.dataService.Setting$.subscribe(a => this.Setting = a);
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
    const kerningBox: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=>{
        this.updateReading();
      });
    });

    kerningBox.observe(this.MeasurementBox.nativeElement);
  }

  ngOnDestroy():void{
    this.dataService.closeChannel();
  }

  private updateReading():void{
    this.dataService.sendData(this.MeasurementBox.nativeElement.offsetHeight);
  }

}
