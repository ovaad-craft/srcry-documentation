import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-display',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})
export class CodeDisplayComponent {

  @Input()Code!: string;

}
