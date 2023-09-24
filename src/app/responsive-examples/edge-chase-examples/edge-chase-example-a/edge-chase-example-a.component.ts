import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseExampleAService } from './edge-chase-example-a.service';

@Component({
  selector: 'edge-chase-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-example-a.component.html',
  styleUrls: ['./edge-chase-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EdgeChaseExampleAComponent {
  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  constructor(private dataService: EdgeChaseExampleAService){}

}
