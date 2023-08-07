import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowSize } from '@site-types';

@Component({
  selector: 'screen-dimensions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-dimensions.component.html',
  styleUrls: ['./screen-dimensions.component.css']
})
export class ScreenDimensionsComponent {

  @Input() Dimensions!: WindowSize;

}
