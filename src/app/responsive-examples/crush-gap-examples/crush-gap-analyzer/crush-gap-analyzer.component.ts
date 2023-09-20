import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild, ViewEncapsulation, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapAnalyzerService } from './crush-gap-analyzer.service';
import { CrushGapSettings } from '@site-types';

@Component({
  selector: 'app-crush-gap-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crush-gap-analyzer.component.html',
  styleUrls: ['./crush-gap-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CrushGapAnalyzerComponent implements OnInit, AfterViewInit {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Settings!: CrushGapSettings;

  @ViewChild('frame', {static: true, read: ElementRef}) Frame!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef}) BaseBox!: ElementRef;
  @ViewChild('box', {static: true, read: ElementRef}) Box!: ElementRef;

  constructor(private dataService: CrushGapAnalyzerService, private zone: NgZone){}
  
  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a=> this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);      
  }

  ngAfterViewInit(): void {
      const frameListener: ResizeObserver = new ResizeObserver((element)=>{
        this.zone.run(()=>{});
      });

      frameListener.observe(this.Frame.nativeElement);
  }

}
