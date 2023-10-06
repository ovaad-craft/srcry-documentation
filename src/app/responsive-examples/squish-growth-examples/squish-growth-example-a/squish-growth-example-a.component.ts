import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthExampleAService } from './squish-growth-example-a.service';

@Component({
  selector: 'app-squish-growth-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-example-a.component.html',
  styleUrls: ['./squish-growth-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SquishGrowthExampleAComponent {
  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  constructor(private dataService: SquishGrowthExampleAService){}

}
