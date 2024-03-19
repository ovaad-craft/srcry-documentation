import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseReadoutService } from './edge-chase-readout.service';
import { SrcryPropReadings } from '@site-types';
import { EdgeChasePageService } from 'src/app/pages/edge-chase-page/edge-chase-page.service';

@Component({
  selector: 'edge-chase-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-readout.component.html',
  styleUrls: ['./edge-chase-readout.component.css']
})
export class EdgeChaseReadoutComponent implements OnInit {

  @Input() BroadcastName! : string;
  @Input() ChannelName!   : string;
  @Input() Targetname!    : string;

  Readings! : SrcryPropReadings;

  constructor(
    private channelService: EdgeChasePageService,
    private dataService : EdgeChaseReadoutService
    ){}

  ngOnInit() : void {
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: '',
      serviceName: 'exampleA',
      defaultValues: false
    });
    this.dataService.Readings$.subscribe(a => this.Readings = a);
  }

}
