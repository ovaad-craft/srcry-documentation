import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthExampleAControllerService } from './squish-growth-example-a-controller.service';

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

  @ViewChild('fullBox', {static: true, read: ElementRef}) FullBox!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef}) BaseBox!: ElementRef;
  @ViewChild('squishBox', {static: true, read: ElementRef}) SquishBox!: ElementRef;

  constructor(private dataService: SquishGrowthExampleAControllerService){}

}
