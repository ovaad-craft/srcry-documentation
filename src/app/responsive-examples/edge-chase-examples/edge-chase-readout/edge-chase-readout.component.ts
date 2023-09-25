import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseReadoutService } from './edge-chase-readout.service';

@Component({
  selector: 'app-edge-chase-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-readout.component.html',
  styleUrls: ['./edge-chase-readout.component.css']
})
export class EdgeChaseReadoutComponent {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()Targetname!: string;

  constructor(private dataService: EdgeChaseReadoutService){}

}
