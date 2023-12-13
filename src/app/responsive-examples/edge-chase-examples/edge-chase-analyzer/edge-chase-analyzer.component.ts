import { AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseAnalyzerService } from './edge-chase-analyzer.service';
import { EdgeChaseSettings, SrcryPropReadings } from '@site-types';

@Component({
  selector: 'app-edge-chase-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-analyzer.component.html',
  styleUrls: ['./edge-chase-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EdgeChaseAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() TargetName!    : string;

  @ViewChild('baseBox', {static : true, read : ElementRef}) BaseBox! : ElementRef;
  @ViewChild('stopBox', {static : true, read : ElementRef}) StopBox! : ElementRef;
  @ViewChild('box',     {static : true, read : ElementRef}) Box!     : ElementRef;

  Settings! : EdgeChaseSettings;

  constructor(private dataService : EdgeChaseAnalyzerService, private zone : NgZone){}

  ngOnInit() : void {
    this.dataService.Settings$.subscribe(a => this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit() : void {
    const boxListener : ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=>{
        this.dataService.sendData(this.readElements());
      });
    });

    boxListener.observe(this.Box.nativeElement);
  }

  ngOnDestroy() : void {
    this.dataService.closeChannel();
  }

  private determineActivWidthProp() : string{
    const baseBox : number = this.BaseBox.nativeElement.offsetWidth;
    const stopBox : number = this.StopBox.nativeElement.offsetWidth;
    const box     : number = this.Box.nativeElement.offsetWidth;
    
    let prop : string = '';

    if(box < baseBox - 3){ prop = 'crushGap'; }
    else if(box > baseBox + 3 && box < stopBox -3){ prop = 'edgeChase'; }
    else if(box > stopBox - 4){ prop = 'chaseStop'}
    else{ prop = 'baseSize'; }

    return prop;  
  }
  
  private determineActivHeightProp():string{
    const baseBox : number = this.BaseBox.nativeElement.offsetHeight;
    const stopBox : number = this.StopBox.nativeElement.offsetHeight;
    const box     : number = this.Box.nativeElement.offsetHeight;
    
    let prop : string = '';

    if(box < baseBox - 3){ prop = 'crushGap'; }
    else if(box > baseBox + 3 && box < stopBox -3){ prop = 'edgeChase'; }
    else if(box > stopBox - 4){ prop = 'chaseStop'}
    else{ prop = 'baseSize'; }

    return prop;  
  }

  private readElements() : SrcryPropReadings{
    return {
      activePropW : this.determineActivWidthProp(),
      activePropH : this.determineActivHeightProp(),
      width       : this.Box.nativeElement.offsetWidth,
      height      : this.Box.nativeElement.offsetHeight
    };
  }

}
