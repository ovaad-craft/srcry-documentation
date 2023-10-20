import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkReadings } from '@site-types';

@Component({
  selector: 'stretch-shrink-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-shrink-readout.component.html',
  styleUrls: ['./stretch-shrink-readout.component.css']
})
export class StretchShrinkReadoutComponent {

  @Input()Readings!: StretchShrinkReadings;

}
