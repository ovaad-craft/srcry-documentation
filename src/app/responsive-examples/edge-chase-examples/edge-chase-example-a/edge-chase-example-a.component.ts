import { Component, ViewEncapsulation, Input, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseExampleAService } from './edge-chase-example-a.service';
import { SrcryPropReadings } from '@site-types';

@Component({
  selector: 'edge-chase-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-example-a.component.html',
  styleUrls: ['./edge-chase-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EdgeChaseExampleAComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  @ViewChild('baseBox', {static: true, read: ElementRef}) BaseBox!: ElementRef;
  @ViewChild('stopBox', {static: true, read: ElementRef}) StopBox!: ElementRef;
  @ViewChild('box', {static: true, read: ElementRef}) Box!: ElementRef;

  constructor(private dataService: EdgeChaseExampleAService){}

  ngOnInit(): void {
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
      
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

  private determineActivWidthProp():string{
    const baseBox: number = this.BaseBox.nativeElement.offsetWidth;
    const stopBox: number = this.StopBox.nativeElement.offsetWidth;
    const box: number = this.Box.nativeElement.offsetWidth;
    
    let prop: string = '';

    if(box < baseBox){ prop = 'crushGap'; }
    if(box === baseBox){ prop = 'baseSize'; }
    if(box > baseBox && box < stopBox){ prop = 'edgeChase'; }
    if(box === stopBox){ prop = 'chaseStop'; }

    return prop;  
  }
  
  private determineActivHeightProp():string{
    const baseBox: number = this.BaseBox.nativeElement.offsetHeight;
    const stopBox: number = this.StopBox.nativeElement.offsetHeight;
    const box: number = this.Box.nativeElement.offsetHeight;
    
    let prop: string = '';

    if(box < baseBox){ prop = 'crushGap'; }
    if(box === baseBox){ prop = 'baseSize'; }
    if(box > baseBox && box < stopBox){ prop = 'edgeChase'; }
    if(box === stopBox){ prop = 'chaseStop'; }

    return prop;  
  }

  private readElements():SrcryPropReadings{
    return {
      activePropW: this.determineActivWidthProp(),
      activePropH: this.determineActivHeightProp(),
      width: this.Box.nativeElement.offsetWidth,
      height: this.Box.nativeElement.offsetHeight
    };
  }

}
