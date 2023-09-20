import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapReadings } from '@site-types';

@Component({
  selector: 'crush-gap-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crush-gap-readout.component.html',
  styleUrls: ['./crush-gap-readout.component.css']
})
export class CrushGapReadoutComponent {
  @Input() Readings!: CrushGapReadings;

}
