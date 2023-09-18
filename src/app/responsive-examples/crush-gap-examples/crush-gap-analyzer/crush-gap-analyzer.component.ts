import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapAnalyzerService } from './crush-gap-analyzer.service';

@Component({
  selector: 'app-crush-gap-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crush-gap-analyzer.component.html',
  styleUrls: ['./crush-gap-analyzer.component.css']
})
export class CrushGapAnalyzerComponent {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  constructor(private dataService: CrushGapAnalyzerService){}

}
