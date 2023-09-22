import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { CrushGapPropData, CrushGapProps } from '@site-types';

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
  @Input()DefaultSettings!: CrushGapPropData;
  @Output()UpdateProps: EventEmitter<CrushGapProps> = new EventEmitter<CrushGapProps>();

  PropSettings: CrushGapProps = {
    crushGapW: '--',
    crushGapWNudgeChunk: 0,
    crushGapWNudgeSlice: 0,
    crushGapH: '--',
    crushGapHNudgeChunk: 0,
    crushGapHNudgeSlice: 0
  }

  SelectorStatus: boolean = false;

  PropButtonsActive: boolean = true;

  ToggleCrushGapW: boolean = false;
  ToggleCrushGapWNudgeChunk: boolean = false;
  ToggleCrushGapWNudgeSlice: boolean = false;
  ToggleCrushGapH: boolean = false;
  ToggleCrushGapHNudgeChunk: boolean = false;
  ToggleCrushGapHNudgeSlice: boolean = false;

}
