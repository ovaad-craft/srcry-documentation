import { AfterContentChecked, AfterViewInit, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeExampleDService } from './base-size-example-d.service';

@Component({
  selector: 'app-base-size-example-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-example-d.component.html',
  styleUrls: ['./base-size-example-d.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleDComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;

  constructor(private dataChannel: BaseSizeExampleDService){}

  ngOnInit(): void {
    this.dataChannel.createChannel(this.BroadcastName, this.ChannelName);
  }

  ngAfterViewInit(): void {
      
  }

  ngAfterContentChecked(): void {
      
  }

  ngOnDestroy(): void {
      this.dataChannel.closeChannel();
  }

}
