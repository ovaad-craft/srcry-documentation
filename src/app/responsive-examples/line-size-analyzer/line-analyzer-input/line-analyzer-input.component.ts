import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineAnalyzerSelectorComponent } from './line-analyzer-selector/line-analyzer-selector.component';
import { LineAnalyzerInputService } from './line-analyzer-input.service';

@Component({
  selector: 'line-analyzer-input',
  standalone: true,
  imports: [CommonModule, LineAnalyzerSelectorComponent],
  templateUrl: './line-analyzer-input.component.html',
  styleUrls: ['./line-analyzer-input.component.css']
})
export class LineAnalyzerInputComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  constructor(private dataService: LineAnalyzerInputService){}

  ngOnInit(): void {
      this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
