import { Component, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
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
export class SquishGrowthExampleAComponent implements AfterViewInit {
  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  @ViewChild('fullBox', {static: true, read: ElementRef}) FullBox!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef}) BaseBox!: ElementRef;
  @ViewChild('squishBox', {static: true, read: ElementRef}) SquishBox!: ElementRef;

  constructor(private dataService: SquishGrowthExampleAService, private zone: NgZone){}

  ngAfterViewInit(): void {
      const boxListener: ResizeObserver = new ResizeObserver(element => {
        this.zone.run(()=> this.readElements());
      });

      boxListener.observe(this.FullBox.nativeElement);
  }

  private readElements(): void{}

}
