import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'analyzer-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analyzer-input.component.html',
  styleUrls: ['./analyzer-input.component.css']
})
export class AnalyzerInputComponent {

  @Input() BroadcastName!: string;
  @Input() ChannelName!: string;

}
