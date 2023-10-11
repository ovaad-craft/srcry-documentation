import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { SquishGrowthData, SquishGrowthProps } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';

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
export class SquishGrowthAnalyzerInputComponent implements OnInit {

  @Input() DefaultSettings!: SquishGrowthData;
  @Output() UpdateProps: EventEmitter<SquishGrowthProps> = new EventEmitter<SquishGrowthProps>();

  PropSettings!: SquishGrowthProps;

  ngOnInit(): void {
      this.initSettings(this.DefaultSettings);
  }

  private initSettings(data: SquishGrowthData): SquishGrowthProps{
    return {
      ...data,
      squishGrowthWMax: createBoxSize(
        data.squishGrowthWMax.size,
        data.squishGrowthWMax.scale,
        data.squishGrowthWMax.speed,
      ),
      squishGrowthHMax: createBoxSize(
        data.squishGrowthHMax.size,
        data.squishGrowthHMax.scale,
        data.squishGrowthHMax.speed,
      )
    };
  }

}
