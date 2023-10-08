import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthAnalyzerControllerService } from './squish-growth-analyzer-controller.service';

@Component({
  selector: 'squish-growth-analyzer-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-analyzer-controller.component.html',
  styleUrls: ['./squish-growth-analyzer-controller.component.css']
})
export class SquishGrowthAnalyzerControllerComponent implements OnInit {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  constructor(private dataService: SquishGrowthAnalyzerControllerService){}

  ngOnInit(): void {
      
  }

}
