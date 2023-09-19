import { Component, Input, ViewEncapsulation } from '@angular/core';
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
export class CrushGapAnalyzerComponent {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  Settings!: CrushGapSettings;

  constructor(private dataService: CrushGapAnalyzerService){
    this.dataService.Settings$.subscribe(a=> this.Settings = a);
  }

}
