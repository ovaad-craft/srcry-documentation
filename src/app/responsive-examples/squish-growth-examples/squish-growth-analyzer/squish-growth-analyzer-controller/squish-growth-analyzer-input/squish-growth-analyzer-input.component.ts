import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { BoxSizeProps, SquishGrowthData, SquishGrowthProps } from '@site-types';
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

  DimensionToggle: boolean = false;

  ToggleSquishGrowthWStart: boolean = false;
  ToggleSquishGrowthWSpeed: boolean = false;
  ToggleSquishGrowthWMax: boolean = false;
  ToggleSquishGrowthWMaxNudgeScale: boolean = false;
  ToggleSquishGrowthWMaxNudgeSlice: boolean = false;
  ToggleSquishGrowthHStart: boolean = false;
  ToggleSquishGrowthHSpeed: boolean = false;
  ToggleSquishGrowthHMax: boolean = false;
  ToggleSquishGrowthHMaxNudgeScale: boolean = false;
  ToggleSquishGrowthHMaxNudgeSlice: boolean = false;

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

  private updateSettings():void{
    this.UpdateProps.emit(this.PropSettings);
  }

  public dimensionToggler(value: boolean):void{
    this.DimensionToggle = value;
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

  public updateSquishGrowthWMax(value: BoxSizeProps):void{
    this.PropSettings.squishGrowthWMax = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthWMaxNudgeScale():void{
    this.ToggleSquishGrowthWMaxNudgeScale = !this.ToggleSquishGrowthWMaxNudgeScale;
  }

  public updateSquishGrowthWMaxNudgeScale(value: number): void{
    this.PropSettings.squishGrowthWMaxNudgeScale = value;
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

  public updateSquishGrowthHMax(value: BoxSizeProps):void{
    this.PropSettings.squishGrowthHMax = value;
    this.updateSettings();
  }
  
  public toggleSquishGrowthHMaxNudgeScale():void{
    this.ToggleSquishGrowthHMaxNudgeScale = !this.ToggleSquishGrowthHMaxNudgeScale;
  }

  public updateSquishGrowthHMaxNudgeScale(value: number): void{
    this.PropSettings.squishGrowthHMaxNudgeScale = value;
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
