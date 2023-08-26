import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzerInputService } from './analyzer-input.service';
import { BoxAnalyzerInterface } from '@site-types';

@Component({
  selector: 'analyzer-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analyzer-input.component.html',
  styleUrls: ['./analyzer-input.component.css']
})
export class AnalyzerInputComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  BoxReadings!: BoxAnalyzerInterface;

  constructor(private dataService: AnalyzerInputService){}

  ngOnInit(): void {
      this.dataService.createDataChannel(this.BroadcastName, this.ChannelName);
      this.dataService.BoxReadings$.subscribe(a => this.BoxReadings = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeDataChannel();
  }

}
