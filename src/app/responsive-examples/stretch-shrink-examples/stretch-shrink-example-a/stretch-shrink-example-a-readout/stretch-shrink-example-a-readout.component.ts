import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkExampleAReadoutService } from './stretch-shrink-example-a-readout.service';

@Component({
  selector: 'app-stretch-shrink-example-a-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-example-a-readout.component.html',
  styleUrls: ['./stretch-shrink-example-a-readout.component.css']
})
export class StretchShrinkExampleAReadoutComponent {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  constructor(private dataService: StretchShrinkExampleAReadoutService){}

}
