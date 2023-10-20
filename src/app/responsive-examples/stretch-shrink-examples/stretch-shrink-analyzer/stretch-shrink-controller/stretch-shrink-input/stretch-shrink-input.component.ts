import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeInterface, BoxSizeProps, StretchShrinkData, StretchShrinkProps } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';

@Component({
  selector: 'stretch-shrink-input',
  standalone: true,
  imports: [
    CommonModule,
    SrcryPropButtonComponent,
    BoxSizeSelectorComponent,
    NumberInputComponent
  ],
  templateUrl: './stretch-shrink-input.component.html',
  styleUrls: ['./stretch-shrink-input.component.css']
})
export class StretchShrinkInputComponent {

  @Input() DefaultSettings!: StretchShrinkData;
  @Output() UpdateProps: EventEmitter<StretchShrinkProps> = new EventEmitter<StretchShrinkProps>();

  PropSettings!: StretchShrinkProps;

  DimensionToggle: boolean = false;
  PropButtonsActive: boolean = true;
  SelectorStatus: boolean = false;

  ToggleStretchShrinkWStart: boolean = false;
  ToggleStretchShrinkWSpeed: boolean = false;
  ToggleStretchShrinkWMin: boolean = false;
  ToggleStretchShrinkWMinNudgeChunk: boolean = false;
  ToggleStretchShrinkWMinNudgeSlice: boolean = false;
  ToggleStretchShrinkHStart: boolean = false;
  ToggleStretchShrinkHSpeed: boolean = false;
  ToggleStretchShrinkHMin: boolean = false;
  ToggleStretchShrinkHMinNudgeChunk: boolean = false;
  ToggleStretchShrinkHMinNudgeSlice: boolean = false;

  ngOnInit(): void {
      this.PropSettings = this.initSettings(this.DefaultSettings);
  }

  private initSettings(data: StretchShrinkData): StretchShrinkProps{
    return {
      ...data,
      stretchShrinkWStart: `${this.DefaultSettings.stretchShrinkWStart}px`,
      stretchShrinkHStart: `${this.DefaultSettings.stretchShrinkHStart}px`,
      stretchShrinkWMin: createBoxSize(
        data.stretchShrinkWMin.size,
        data.stretchShrinkWMin.scale,
        data.stretchShrinkWMin.speed,
      ),
      stretchShrinkHMin: createBoxSize(
        data.stretchShrinkHMin.size,
        data.stretchShrinkHMin.scale,
        data.stretchShrinkHMin.speed,
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

  public toggleStretchShrinkWStart():void{
    this.ToggleStretchShrinkWStart = !this.ToggleStretchShrinkWStart;
  }

  public updateStretchShrinkWStart(value: number):void{
    this.PropSettings.stretchShrinkWStart = `${value}px`;
    this.updateSettings();
  }
  
  public toggleStretchShrinkWSpeed():void{
    this.ToggleStretchShrinkWSpeed = !this.ToggleStretchShrinkWSpeed;
  }
  
  public updateStretchShrinkWSpeed(value: number):void{
    this.PropSettings.stretchShrinkWSpeed = value;
    this.updateSettings();
  }
  
  public toggleStretchShrinkWMin():void{
    this.ToggleStretchShrinkWMin = !this.ToggleStretchShrinkWMin;
  }

  public updateStretchShrinkWMin(value: BoxSizeInterface):void{
    this.PropSettings.stretchShrinkWMin = createBoxSize(value.size, value.scale, value.speed);
    this.updateSettings();
  }
  
  public toggleStretchShrinkWMinNudgeChunk():void{
    this.ToggleStretchShrinkWMinNudgeChunk = !this.ToggleStretchShrinkWMinNudgeChunk;
  }

  public updateStretchShrinkWMinNudgeChunk(value: number): void{
    this.PropSettings.stretchShrinkWMinNudgeChunk = value;
    this.updateSettings();
  }
  
  public toggleStretchShrinkWMinNudgeSlice():void{
    this.ToggleStretchShrinkWMinNudgeSlice = !this.ToggleStretchShrinkWMinNudgeSlice;
  }
  
  public updateStretchShrinkWMinNudgeSlice(value: number): void{
    this.PropSettings.stretchShrinkWMinNudgeSlice = value;
    this.updateSettings();
  }
  
  public toggleStretchShrinkHStart():void{
    this.ToggleStretchShrinkHStart = !this.ToggleStretchShrinkHStart;
  }

  public updateStretchShrinkHStart(value: number):void{
    this.PropSettings.stretchShrinkHStart = `${value}px`;
    this.updateSettings();
  }
  
  public toggleStretchShrinkHSpeed():void{
    this.ToggleStretchShrinkHSpeed = !this.ToggleStretchShrinkHSpeed;
  }

  public updateStretchShrinkHSpeed(value: number):void{
    this.PropSettings.stretchShrinkHSpeed = value;
    this.updateSettings();
  }
  
  public toggleStretchShrinkHMin():void{
    this.ToggleStretchShrinkHMin = !this.ToggleStretchShrinkHMin;
  }

  public updateStretchShrinkHMin(value: BoxSizeInterface):void{
    this.PropSettings.stretchShrinkHMin = createBoxSize(value.size, value.scale, value.speed);
    this.updateSettings();
  }
  
  public toggleStretchShrinkHMinNudgeChunk():void{
    this.ToggleStretchShrinkHMinNudgeChunk = !this.ToggleStretchShrinkHMinNudgeChunk;
  }

  public updateStretchShrinkHMinNudgeChunk(value: number): void{
    this.PropSettings.stretchShrinkHMinNudgeChunk = value;
    this.updateSettings();
  }
  
  public toggleStretchShrinkHMinNudgeSlice():void{
    this.ToggleStretchShrinkHMinNudgeSlice = !this.ToggleStretchShrinkHMinNudgeSlice;
  }

  public updateStretchShrinkHMinNudgeSlice(value: number): void{
    this.PropSettings.stretchShrinkHMinNudgeSlice = value;
    this.updateSettings();
  }

}
