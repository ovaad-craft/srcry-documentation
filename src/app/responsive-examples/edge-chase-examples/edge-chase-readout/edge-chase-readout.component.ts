import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseReadoutService } from './edge-chase-readout.service';
import { SrcryPropReadings } from '@site-types';

@Component({
  selector: 'edge-chase-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-readout.component.html',
  styleUrls: ['./edge-chase-readout.component.css']
})
export class EdgeChaseReadoutComponent implements OnInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()Targetname!: string;

  Readings!: SrcryPropReadings;

  constructor(private dataService: EdgeChaseReadoutService){}

  ngOnInit(): void {
    this.dataService.Readings$.subscribe(a => this.Readings = a);
    this.dataService.createBroadcastChannel(this.BroadcastName, this.ChannelName);
  }

  ngOnDestroy(): void {
      this.dataService.closeDataChannel();
  }

}
