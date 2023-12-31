import { Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy, ViewChild, ViewEncapsulation, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapAnalyzerService } from './crush-gap-analyzer.service';
import { ActivePropReadings, CrushGapSettings } from '@site-types';

@Component({
  selector: 'app-crush-gap-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crush-gap-analyzer.component.html',
  styleUrls: ['./crush-gap-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CrushGapAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  Settings!: CrushGapSettings;

  @ViewChild('frame',   {static : true, read : ElementRef}) Frame!   : ElementRef;
  @ViewChild('baseBox', {static : true, read : ElementRef}) BaseBox! : ElementRef;
  @ViewChild('box',     {static : true, read : ElementRef}) Box!     : ElementRef;

  constructor(private dataService : CrushGapAnalyzerService, private zone : NgZone){}
  
  ngOnInit() : void {
    this.dataService.Settings$.subscribe(a=> this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);      
  }

  ngAfterViewInit() : void {
      const frameListener: ResizeObserver = new ResizeObserver((element)=>{
        this.zone.run(()=>{ this.updateReadings() });
      });

      frameListener.observe(this.Box.nativeElement);
  }

  ngOnDestroy() : void {
      this.dataService.closeChannel();
  }

  private determineActiveProp() : ActivePropReadings{
    const widthComparison : boolean = this.Frame.nativeElement.offsetWidth >
                                     this.BaseBox.nativeElement.offsetWidth ?
                                     true : false;
    const heightComparison : boolean = this.Frame.nativeElement.offsetHeight >
                                      this.BaseBox.nativeElement.offsetHeight ?
                                      true : false;
                                      
    return {
      activePropW : widthComparison  ? 'baseSize' : 'crushGap',
      activePropH : heightComparison ? 'baseSize' : 'crushGap'
    };
  }

  private updateReadings() : void{
    const activeProps : ActivePropReadings = this.determineActiveProp();

    this.dataService.sendData({
      activePropW : activeProps.activePropW,
      activePropH : activeProps.activePropH,
      width       : this.Box.nativeElement.offsetWidth,
      height      : this.Box.nativeElement.offsetHeight
    });
  }

}
