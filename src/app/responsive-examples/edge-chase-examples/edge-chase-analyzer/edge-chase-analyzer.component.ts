import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
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

  Settings!: EdgeChaseSettings;

  constructor(private dataService: EdgeChaseAnalyzerService){}

  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a => this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

  ngAfterViewInit(): void {
      
  }

  ngOnDestroy(): void {
    this.dataService.closeChannel();
  }

}
