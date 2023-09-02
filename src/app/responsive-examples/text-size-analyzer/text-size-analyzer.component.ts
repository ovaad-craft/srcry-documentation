import { Component, Input, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ViewChild, ElementRef, NgZone, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeAnalyzerService } from './text-size-analyzer.service';

@Component({
  selector: 'app-text-size-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-size-analyzer.component.html',
  styleUrls: ['./text-size-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextSizeAnalyzerComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  @ViewChild('frame', {static: true, read: ElementRef}) Frame! : ElementRef;
  @ViewChild('textSize', {static: true, read: ElementRef}) TextSize!: ElementRef;

  Prop!: string;

  constructor(
    private dataService: TextSizeAnalyzerService,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
    ){}

  ngOnInit(): void {

    this.dataService.createDataChannel(this.BroadcastName, this.ChannelName);

    this.dataService.TextSizeValue$.subscribe(a=> this.Prop = a);
      
  }

  ngAfterViewInit(): void {
      const frameObserver = new ResizeObserver(()=>{
        this.zone.run(()=> this.getTextBoxSize());
      });

      frameObserver.observe(this.Frame.nativeElement);
      this.getTextBoxSize();
  }

  ngAfterViewChecked(): void {
      this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
      this.dataService.closeDataChannel();
  }

  private getTextBoxSize():void{
    this.dataService.sendTextSizeReadings(this.TextSize.nativeElement.offsetWidth);

    //console.log(this.TextSize.nativeElement.offsetWidth);
  }

}
