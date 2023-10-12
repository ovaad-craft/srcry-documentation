import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthAnalyzerReadings } from '@site-types';

@Component({
  selector: 'squish-growth-analyzer-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squish-growth-analyzer-readout.component.html',
  styleUrls: ['./squish-growth-analyzer-readout.component.css']
})
export class SquishGrowthAnalyzerReadoutComponent {

  @Input()Readings!: SquishGrowthAnalyzerReadings;

}
