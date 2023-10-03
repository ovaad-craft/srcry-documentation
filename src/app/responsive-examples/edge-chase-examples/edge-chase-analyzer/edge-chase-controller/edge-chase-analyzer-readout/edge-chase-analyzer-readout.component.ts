import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropReadings } from '@site-types';

@Component({
  selector: 'edge-chase-analyzer-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-analyzer-readout.component.html',
  styleUrls: ['./edge-chase-analyzer-readout.component.css']
})
export class EdgeChaseAnalyzerReadoutComponent {

  @Input()Readings!: SrcryPropReadings;

}
