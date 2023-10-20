import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { BoxSizeInterface, BoxSizeProps, SquishGrowthData, SquishGrowthProps } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

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

  DimensionToggle: boolean = false;
  PropButtonsActive: boolean = true;
  SelectorStatus: boolean = false;

  ToggleSquishGrowthWStart: boolean = false;
  ToggleSquishGrowthWSpeed: boolean = false;
  ToggleSquishGrowthWMax: boolean = false;
  ToggleSquishGrowthWMaxNudgeChunk: boolean = false;
  ToggleSquishGrowthWMaxNudgeSlice: boolean = false;
  ToggleSquishGrowthHStart: boolean = false;
  ToggleSquishGrowthHSpeed: boolean = false;
  ToggleSquishGrowthHMax: boolean = false;
  ToggleSquishGrowthHMaxNudgeChunk: boolean = false;
  ToggleSquishGrowthHMaxNudgeSlice: boolean = false;

  ngOnInit(): void {
      this.PropSettings = this.initSettings(this.DefaultSettings);
  }

  private initSettings(data: SquishGrowthData): SquishGrowthProps{
    return {
      ...data,
      squishGrowthWStart: `${this.DefaultSettings.squishGrowthWStart}px`,
      squishGrowthHStart: `${this.DefaultSettings.squishGrowthHStart}px`,
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

  private updateSettings():void{
    this.UpdateProps.emit(this.PropSettings);
  }

  public makeIntoVariable(value: BoxSizeProps):string{
    return createCssVariable(value);
  }

  public dimensionToggler(value: boolean):void{
    this.DimensionToggle = value;
  }

  public updatePropButtons(value: boolean): void{
    this.PropButtonsActive = value;
  }

  public updateSelectorStatus(value: boolean):void{
    this.SelectorStatus = value;
  }

  public toggleSquishGrowthWStart():void{
    this.ToggleSquishGrowthWStart = !this.ToggleSquishGrowthWStart;
  }

  public updateSquishGrowthWStart(value: number):void{
    this.PropSettings.squishGrowthWStart = `${value}px`;
    this.updateSettings();
  }
  
  public toggleSquishGrowthWSpeed():void{
    this.ToggleSquishGrowthWSpeed = !this.ToggleSquishGrowthWSpeed;
  }
  
  public updateSquishGrowthWSpeed(value: number):void{
    this.PropSettings.squishGrowthWSpeed = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthWMax():void{
    this.ToggleSquishGrowthWMax = !this.ToggleSquishGrowthWMax;
  }

  public updateSquishGrowthWMax(value: BoxSizeInterface):void{
    this.PropSettings.squishGrowthWMax = createBoxSize(value.size, value.scale, value.speed);
    this.updateSettings();
  }
  
  public toggleSquishGrowthWMaxNudgeChunk():void{
    this.ToggleSquishGrowthWMaxNudgeChunk = !this.ToggleSquishGrowthWMaxNudgeChunk;
  }

  public updateSquishGrowthWMaxNudgeChunk(value: number): void{
    this.PropSettings.squishGrowthWMaxNudgeChunk = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthWMaxNudgeSlice():void{
    this.ToggleSquishGrowthWMaxNudgeSlice = !this.ToggleSquishGrowthWMaxNudgeSlice;
  }
  
  public updateSquishGrowthWMaxNudgeSlice(value: number): void{
    this.PropSettings.squishGrowthWMaxNudgeSlice = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthHStart():void{
    this.ToggleSquishGrowthHStart = !this.ToggleSquishGrowthHStart;
  }

  public updateSquishGrowthHStart(value: number):void{
    this.PropSettings.squishGrowthHStart = `${value}px`;
    this.updateSettings();
  }
  
  public toggleSquishGrowthHSpeed():void{
    this.ToggleSquishGrowthHSpeed = !this.ToggleSquishGrowthHSpeed;
  }

  public updateSquishGrowthHSpeed(value: number):void{
    this.PropSettings.squishGrowthHSpeed = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthHMax():void{
    this.ToggleSquishGrowthHMax = !this.ToggleSquishGrowthHMax;
  }

  public updateSquishGrowthHMax(value: BoxSizeInterface):void{
    this.PropSettings.squishGrowthHMax = createBoxSize(value.size, value.scale, value.speed);
    this.updateSettings();
  }
  
  public toggleSquishGrowthHMaxNudgeChunk():void{
    this.ToggleSquishGrowthHMaxNudgeChunk = !this.ToggleSquishGrowthHMaxNudgeChunk;
  }

  public updateSquishGrowthHMaxNudgeChunk(value: number): void{
    this.PropSettings.squishGrowthHMaxNudgeChunk = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthHMaxNudgeSlice():void{
    this.ToggleSquishGrowthHMaxNudgeSlice = !this.ToggleSquishGrowthHMaxNudgeSlice;
  }

  public updateSquishGrowthHMaxNudgeSlice(value: number): void{
    this.PropSettings.squishGrowthHMaxNudgeSlice = value;
    this.updateSettings();
  }

}
