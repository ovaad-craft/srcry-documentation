import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkExampleAService } from './stretch-shrink-example-a.service';

@Component({
  selector: 'stretch-shrink-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-example-a.component.html',
  styleUrls: ['./stretch-shrink-example-a.component.css']
})
export class StretchShrinkExampleAComponent {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  constructor(private dataService: StretchShrinkExampleAService){}

}
