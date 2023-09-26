import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseAnalyzerService } from './edge-chase-analyzer.service';

@Component({
  selector: 'app-edge-chase-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-analyzer.component.html',
  styleUrls: ['./edge-chase-analyzer.component.css']
})
export class EdgeChaseAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  constructor(private dataService: EdgeChaseAnalyzerService){}

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }

}
