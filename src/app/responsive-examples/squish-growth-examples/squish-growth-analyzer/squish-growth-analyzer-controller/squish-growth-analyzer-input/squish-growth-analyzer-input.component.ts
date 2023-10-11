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

  public dimensionToggler(value: boolean):void{
    this.DimensionToggle = value;
  }

  public toggleSquishGrowthWStart():void{
    this.ToggleSquishGrowthWStart = !this.ToggleSquishGrowthWStart;
  }
  
  public toggleSquishGrowthWSpeed():void{
    this.ToggleSquishGrowthWSpeed = !this.ToggleSquishGrowthWSpeed;
  }
  
  public toggleSquishGrowthWMax():void{
    this.ToggleSquishGrowthWMax = !this.ToggleSquishGrowthWMax;
  }
  
  public toggleSquishGrowthWMaxNudgeScale():void{
    this.ToggleSquishGrowthWMaxNudgeScale = !this.ToggleSquishGrowthWMaxNudgeScale;
  }
  
  public toggleSquishGrowthWMaxNudgeSlice():void{
    this.ToggleSquishGrowthWMaxNudgeSlice = !this.ToggleSquishGrowthWMaxNudgeSlice;
  }
  
  public toggleSquishGrowthHStart():void{
    this.ToggleSquishGrowthHStart = !this.ToggleSquishGrowthHStart;
  }
  
  public toggleSquishGrowthHSpeed():void{
    this.ToggleSquishGrowthHSpeed = !this.ToggleSquishGrowthHSpeed;
  }
  
  public toggleSquishGrowthHMax():void{
    this.ToggleSquishGrowthHMax = !this.ToggleSquishGrowthHMax;
  }
  
  public toggleSquishGrowthHMaxNudgeScale():void{
    this.ToggleSquishGrowthHMaxNudgeScale = !this.ToggleSquishGrowthHMaxNudgeScale;
  }
  
  public toggleSquishGrowthHMaxNudgeSlice():void{
    this.ToggleSquishGrowthHMaxNudgeSlice = !this.ToggleSquishGrowthHMaxNudgeSlice;
  }

}
