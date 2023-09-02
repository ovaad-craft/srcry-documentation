import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'syntax-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './syntax-frame.component.html',
  styleUrls: ['./syntax-frame.component.css']
})
export class SyntaxFrameComponent {

  @Input() Cattegory: string = '';
  @Input() Parts!: string[];
}
