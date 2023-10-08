import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthExampleAControllerService } from './squish-growth-example-a-controller.service';
import { SquishGrowthReadings } from '@site-types';

@Component({
  selector: 'squish-growth-example-a-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-example-a-controller.component.html',
  styleUrls: ['./squish-growth-example-a-controller.component.css']
})
export class SquishGrowthExampleAControllerComponent implements OnInit {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  public Readings!: SquishGrowthReadings;

  constructor(private dataService: SquishGrowthExampleAControllerService){}

  ngOnInit(): void {
      this.dataService.Readings$.subscribe(a => this.Readings = a);
      this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }

}
