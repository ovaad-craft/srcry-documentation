import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeAnalyzerService } from './line-size-analyzer.service';

@Component({
  selector: 'app-line-size-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-size-analyzer.component.html',
  styleUrls: ['./line-size-analyzer.component.css']
})
export class LineSizeAnalyzerComponent implements OnInit, OnDestroy {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

  LineSize!: string;

  constructor(private dataService: LineSizeAnalyzerService){}

  ngOnInit(): void {
      this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
      this.dataService.CurrentSize$.subscribe(a=> this.LineSize = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
