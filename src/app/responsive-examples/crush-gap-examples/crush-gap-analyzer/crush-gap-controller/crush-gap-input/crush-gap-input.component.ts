import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { BoxSizeInterface, CrushGapPropData, CrushGapProps } from '@site-types';
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

  public toggleCrushGapW(): void{
    this.ToggleCrushGapW = !this.ToggleCrushGapW;
  }

  public updateCrushGapW(size: BoxSizeInterface): void{
    this.PropSettings.crushGapW = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleCrushGapWNudgeChunk():void{
    this.ToggleCrushGapWNudgeChunk = !this.ToggleCrushGapWNudgeChunk;
  }

  public updateCrushGapWNudgeChunk(size: number):void{
    this.PropSettings.crushGapWNudgeChunk = size;
    this.updateProps();
  }

  public toggleCrushGapWNudgeSlice(): void{
    this.ToggleCrushGapWNudgeSlice = !this.ToggleCrushGapWNudgeSlice;
  }

  public updateCrushGapWNudgeSlice(size: number): void{
    this.PropSettings.crushGapWNudgeSlice = size;
    this.updateProps();
  }
  
  public toggleCrushGapH(): void{
    this.ToggleCrushGapH = !this.ToggleCrushGapH;
  }

  public updateCrushGapH(size: BoxSizeInterface): void{
    this.PropSettings.crushGapH = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleCrushGapHNudgeChunk():void{
    this.ToggleCrushGapHNudgeChunk = !this.ToggleCrushGapHNudgeChunk;
  }

  public updateCrushGapHNudgeChunk(size: number): void{
    this.PropSettings.crushGapHNudgeChunk = size;
    this.updateProps();
  }

  public toggleCrushGapHNudgeSlice(): void{
    this.ToggleCrushGapHNudgeSlice = !this.ToggleCrushGapHNudgeSlice;
  }

  public updateCrushGapHNudgeSlice(size: number): void{
    this.PropSettings.crushGapHNudgeSlice = size;
  }

}
