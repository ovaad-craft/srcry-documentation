import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { SquishGrowthData, SquishGrowthProps } from '@site-types';

@Component({
  selector: 'squish-growth-analyzer-input',
  standalone: true,
  imports: [
    CommonModule,
    SrcryPropButtonComponent,
    NumberInputComponent,
    BoxSizeSelectorComponent
  ],
  templateUrl: './squish-growth-analyzer-input.component.html',
  styleUrls: ['./squish-growth-analyzer-input.component.css']
})
export class SquishGrowthAnalyzerInputComponent {

  @Input() DefaultSettings!: SquishGrowthData;
  @Output() UpdateProps: EventEmitter<SquishGrowthProps> = new EventEmitter<SquishGrowthProps>();

}
