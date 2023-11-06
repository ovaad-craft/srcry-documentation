import { Component, Input, OnInit, OnDestroy, AfterViewInit, NgZone, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KerningAnalyzerService } from './kerning-analyzer.service';

@Component({
  selector: 'app-kerning-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kerning-analyzer.component.html',
  styleUrls: ['./kerning-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KerningAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Setting!: number;

  @ViewChild('measurementBox', {static: true, read: ElementRef}) MeasurementBox!: ElementRef;

  constructor(private zone: NgZone, private dataService: KerningAnalyzerService){}

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
