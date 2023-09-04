import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineAnalyzerSelectorComponent } from './line-analyzer-selector/line-analyzer-selector.component';
import { LineAnalyzerInputService } from './line-analyzer-input.service';
import { PropDisplayComponent } from 'src/app/layout/prop-display/prop-display.component';

@Component({
  selector: 'line-analyzer-input',
  standalone: true,
  imports: [CommonModule, LineAnalyzerSelectorComponent, PropDisplayComponent],
  templateUrl: './line-analyzer-input.component.html',
  styleUrls: ['./line-analyzer-input.component.css']
})
export class LineAnalyzerInputComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  LineSizeReadout: number = 0;

  constructor(private dataService: LineAnalyzerInputService){}

  ngOnInit(): void {
      this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
      this.dataService.ReadoutValue$.subscribe(a => this.LineSizeReadout = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
