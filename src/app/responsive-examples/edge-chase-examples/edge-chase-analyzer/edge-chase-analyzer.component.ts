import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseAnalyzerService } from './edge-chase-analyzer.service';
import { EdgeChaseSettings } from '@site-types';

@Component({
  selector: 'app-edge-chase-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-analyzer.component.html',
  styleUrls: ['./edge-chase-analyzer.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EdgeChaseAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  @ViewChild('baseBox', {static: true, read: ElementRef}) BaseBox!: ElementRef;
  @ViewChild('stopBox', {static: true, read: ElementRef}) StopBox!: ElementRef;
  @ViewChild('box', {static: true, read: ElementRef}) Box!: ElementRef;

  Settings!: EdgeChaseSettings;

  constructor(private dataService: EdgeChaseAnalyzerService){}

  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a => this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
    const boxListener: ResizeObserver = new ResizeObserver((element)=>{});

    boxListener.observe(this.Box.nativeElement);
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

}
