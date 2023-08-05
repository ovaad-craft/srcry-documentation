import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'responsive-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-window.component.html',
  styleUrls: ['./responsive-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveWindowComponent {

}
