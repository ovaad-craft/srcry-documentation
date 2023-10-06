import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthExampleAService } from '../squish-growth-example-a.service';

@Component({
  selector: 'squish-growth-example-a-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-example-a-controller.component.html',
  styleUrls: ['./squish-growth-example-a-controller.component.css']
})
export class SquishGrowthExampleAControllerComponent {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  constructor(private dataService: SquishGrowthExampleAService){}

}
