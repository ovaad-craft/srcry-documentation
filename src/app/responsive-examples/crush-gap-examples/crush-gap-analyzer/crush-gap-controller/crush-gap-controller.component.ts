import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapInputComponent } from './crush-gap-input/crush-gap-input.component';

@Component({
  selector: 'crush-gap-controller',
  standalone: true,
  imports: [CommonModule, CrushGapInputComponent],
  templateUrl: './crush-gap-controller.component.html',
  styleUrls: ['./crush-gap-controller.component.css']
})
export class CrushGapControllerComponent {

}
