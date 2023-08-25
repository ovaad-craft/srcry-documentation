import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzerInputService } from './analyzer-input.service';

@Component({
  selector: 'analyzer-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analyzer-input.component.html',
  styleUrls: ['./analyzer-input.component.css']
})
export class AnalyzerInputComponent implements OnInit {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  constructor(private dataService: AnalyzerInputService){}

  ngOnInit(): void {
      this.dataService.createDataChannel(this.BroadcastName, this.ChannelName);
  }

}
