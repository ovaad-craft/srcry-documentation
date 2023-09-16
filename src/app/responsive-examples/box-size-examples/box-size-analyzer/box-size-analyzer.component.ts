import { Component, Input, ViewEncapsulation, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, AfterViewChecked, AfterContentChecked, OnInit, NgZone, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeAnalyzerService } from './box-size-analyzer.service';
import { BoxAnalyzerInterface, BoxAnalyzerPropSizes } from '@site-types';

@Component({
  selector: 'box-size-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-size-analyzer.component.html',
  styleUrls: ['./box-size-analyzer.component.css'],
  /*changeDetection: ChangeDetectionStrategy.OnPush,*/
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BoxSizeAnalyzerComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  PropValues!: BoxAnalyzerPropSizes;
  BoxSize: BoxAnalyzerInterface = {coreBoxWidth: 0, fullBoxWidth: 0};
  InitSize: boolean = false;

  @ViewChild('frame', {static: true, read: ElementRef<HTMLElement>}) Frame!: ElementRef<HTMLElement>;
  @ViewChild('coreBox', {static: true, read: ElementRef<HTMLElement>}) CoreBox!: ElementRef<HTMLElement>;
  @ViewChild('fullBox', {static: true, read: ElementRef<HTMLElement>}) FullBox!: ElementRef<HTMLElement>;

  constructor(
    private boxService: BoxSizeAnalyzerService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ){
    
  }

  ngOnInit(): void {
    this.boxService.createDataChannel(this.BroadcastName, this.ChannelName);

    this.boxService.BoxSizeValue$.subscribe(a=> {
      this.PropValues = a;
      this.getBoxSizes();
    });
  }
  
  ngAfterViewInit(): void {
    const frameObserver = new ResizeObserver(()=>{
      this.zone.run(()=> this.getBoxSizes());
    });
  
    frameObserver.observe(this.Frame.nativeElement);
    this.getBoxSizes();
      
  }
  
  ngAfterViewChecked(): void {
      
  }
  
  ngAfterContentChecked(): void {
      this.cdr.detectChanges();
      this.getBoxSizes();
     /*if(this.BoxSize.coreBoxWidth === 0){
        this.getBoxSizes();
      }*/
  }

  ngOnDestroy(): void {
      this.boxService.closeDataChannel();
  }

  private getBoxSizes(): void{
    const size: BoxAnalyzerInterface = {
      coreBoxWidth: this.CoreBox.nativeElement.offsetWidth,
      fullBoxWidth: this.FullBox.nativeElement.offsetWidth
    };

    this.BoxSize = size;

    this.boxService.sendBoxReadings(size);

  }
 
}
