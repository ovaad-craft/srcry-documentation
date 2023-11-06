import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kerning-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kerning-readout.component.html',
  styleUrls: ['./kerning-readout.component.css']
})
export class KerningReadoutComponent {
  @Input() Reading!: number;

}
