import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'text-analyzer-b-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-analyzer-b-readout.component.html',
  styleUrls: ['./text-analyzer-b-readout.component.css']
})
export class TextAnalyzerBReadoutComponent {

  @Input() Reading!: number;

}
