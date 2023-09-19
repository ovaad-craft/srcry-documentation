import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
export class CrushGapAnalyzerComponent implements OnInit {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Settings!: CrushGapSettings;

  constructor(private dataService: CrushGapAnalyzerService){}
  
  ngOnInit(): void {
    this.dataService.Settings$.subscribe(a=> this.Settings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName, this.TargetName);      
  }

}
