import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthExampleAControllerService } from './squish-growth-example-a-controller.service';
import { SquishGrowthReadings } from '@site-types';
import { SquishGrowthPageService } from 'src/app/pages/squish-growth-page/squish-growth-page.service';

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

  constructor(
    private channelService: SquishGrowthPageService,
    private dataService: SquishGrowthExampleAControllerService
    ){}

  ngOnInit(): void {
    this.channelService.addRegistry({
      channel: this.ChannelName,
      target: this.TargetName,
      serviceName: 'exampleA',
      defaultValues: false
    });
      this.dataService.Readings$.subscribe(a => this.Readings = a);
  }

}
