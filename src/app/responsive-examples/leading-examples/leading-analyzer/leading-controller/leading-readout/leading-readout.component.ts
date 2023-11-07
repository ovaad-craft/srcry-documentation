import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'leading-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leading-readout.component.html',
  styleUrls: ['./leading-readout.component.css']
})
export class LeadingReadoutComponent {

  @Input() Reading!: number;

}
