import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropDisplayComponent } from 'src/app/layout/prop-display/prop-display.component';
import { TextAnalyzerInputService } from './text-analyzer-input.service';
import { TextSizeInterface, TextSizePropInterface } from '@site-types';
import { TextAnalyzerSelectorComponent } from './text-analyzer-selector/text-analyzer-selector.component';

@Component({
  selector: 'text-analyzer-input',
  standalone: true,
  imports: [CommonModule, TextAnalyzerInputComponent, TextAnalyzerSelectorComponent, PropDisplayComponent],
  templateUrl: './text-analyzer-input.component.html',
  styleUrls: ['./text-analyzer-input.component.css']
})
export class TextAnalyzerInputComponent implements OnInit, OnDestroy {
  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  TextSelectorValue!: TextSizeInterface;
  TextSizeReading!: number;

  constructor(private dataService: TextAnalyzerInputService){}

  ngOnInit(): void {

    this.dataService.createDataChannel(this.BroadcastName, this.ChannelName);
    this.dataService.TextSizeReading$.subscribe(a=> this.TextSizeReading = a);
      
  }

  ngOnDestroy(): void {
      this.dataService.closeDataChannel();
  }

  public updateCurrentSize(size: TextSizeInterface):void{
    this.TextSelectorValue = size;
    this.dataService.sendTextSize(size);
  }
}
