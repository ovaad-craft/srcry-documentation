import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkExampleAService } from './stretch-shrink-example-a.service';

@Component({
  selector: 'stretch-shrink-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-example-a.component.html',
  styleUrls: ['./stretch-shrink-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StretchShrinkExampleAComponent {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  @ViewChild('boxFrame', {static: true, read: ElementRef}) BoxFrame!: ElementRef;
  @ViewChild('box', {static: true, read: ElementRef}) Box!: ElementRef;
  @ViewChild('shrinkBox', {static: true, read: ElementRef}) ShrinkBox!: ElementRef;

  constructor(private dataService: StretchShrinkExampleAService){}

}
