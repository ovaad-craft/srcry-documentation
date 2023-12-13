import { Component, ViewEncapsulation, NgZone, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnalyzerBInterface } from '@site-types';
import { TextAnalyzerBService } from './text-analyzer-b.service';

@Component({
  selector: 'app-text-analyzer-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-analyzer-b.component.html',
  styleUrls: ['./text-analyzer-b.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextAnalyzerBComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  @ViewChild('textBox', {static : true, read : ElementRef}) TextBox! : ElementRef;

  Settings! : TextAnalyzerBInterface;

  constructor(private zone : NgZone, private dataService : TextAnalyzerBService){}

  ngOnInit() : void {
    this.dataService.Settings$.subscribe(a => this.Settings = a);
    this.dataService.createDataChannel(this.BroadcastName, this.ChannelName, this.TargetName);  
  }

  ngAfterViewInit() : void {
    const boxListener: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=> this.dataService.sendData(this.TextBox.nativeElement.offsetHeight) );
    });

    boxListener.observe(this.TextBox.nativeElement);
  }

  ngOnDestroy() : void {
    this.dataService.closeChannel();      
  }

  private updateSize() : void{
    this.dataService.sendData(this.TextBox.nativeElement.offsetHeight);
  }

}
