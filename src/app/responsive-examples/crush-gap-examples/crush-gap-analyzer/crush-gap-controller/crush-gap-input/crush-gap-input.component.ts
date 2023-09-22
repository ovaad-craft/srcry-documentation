import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';

@Component({
  selector: 'crush-gap-input',
  standalone: true,
  imports: [
    CommonModule,
    BoxSizeSelectorComponent,
    NumberInputComponent,
    SrcryPropButtonComponent
  ],
  templateUrl: './crush-gap-input.component.html',
  styleUrls: ['./crush-gap-input.component.css']
})
export class CrushGapInputComponent {

}
