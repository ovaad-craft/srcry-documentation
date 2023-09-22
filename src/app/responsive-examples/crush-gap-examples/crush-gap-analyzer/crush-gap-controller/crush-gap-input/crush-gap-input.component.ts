import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { CrushGapPropData, CrushGapProps } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';

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
export class CrushGapInputComponent implements OnInit {
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

  ngOnInit(): void {
      this.initDefaults();
  }

  private initDefaults():void{
    const props: CrushGapProps = {
      crushGapW: createBoxSize(
        this.DefaultSettings.crushGapW.size,
        this.DefaultSettings.crushGapW.scale,
        this.DefaultSettings.crushGapW.speed
      ),
      crushGapWNudgeChunk: this.DefaultSettings.crushGapHNudgeChunk,
      crushGapWNudgeSlice: this.DefaultSettings.crushGapHNudgeSlice,
      crushGapH: createBoxSize(
        this.DefaultSettings.crushGapH.size,
        this.DefaultSettings.crushGapH.scale,
        this.DefaultSettings.crushGapH.speed
      ),
      crushGapHNudgeChunk: this.DefaultSettings.crushGapHNudgeChunk,
      crushGapHNudgeSlice: this.DefaultSettings.crushGapHNudgeSlice
    };

    this.PropSettings = props;
  }

  private updateProps(): void{
    this.UpdateProps.emit(this.PropSettings);
  }

}
