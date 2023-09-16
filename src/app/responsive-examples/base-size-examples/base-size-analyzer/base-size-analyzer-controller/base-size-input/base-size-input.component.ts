import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { BaseSizePropData, BaseSizeProps, BoxSizeInterface, BoxSizeProps } from '@site-types';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';

@Component({
  selector: 'base-size-input',
  standalone: true,
  imports: [CommonModule, BoxSizeSelectorComponent, SrcryPropButtonComponent, NumberInputComponent],
  templateUrl: './base-size-input.component.html',
  styleUrls: ['./base-size-input.component.css']
})
export class BaseSizeInputComponent implements OnInit {

  @Input() DefaultSettings!: BaseSizePropData;
  @Output()UpdateProps: EventEmitter<BaseSizeProps> = new EventEmitter<BaseSizeProps>();

  PropSettings: BaseSizeProps = {
    baseSizeW: '--',
    baseSizeWNudgeChunk: 0,
    baseSizeWNudgeSlice: 0,
    baseSizeH: '--',
    baseSizeHNudgeChunk: 0,
    baseSizeHNudgeSlice: 0
  };

  SelectorStatus:boolean = false;

  PropButtonsActive: boolean = true;

  ToggleBaseW: boolean = false;
  ToggleBaseWChunk: boolean = false;  
  ToggleBaseWSlice: boolean = false;  
  ToggleBaseH: boolean = false;
  ToggleBaseHChunk: boolean = false;  
  ToggleBaseHSlice: boolean = false;

  ngOnInit(): void {
    this.initDefaults();
  }

  public updatePropButtons(value: boolean):void{
    this.PropButtonsActive = value;
  }

  public updateBaseSizeW(size:BoxSizeInterface):void{
    this.PropSettings.baseSizeW = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleBaseWselector():void{
    this.ToggleBaseW = !this.ToggleBaseW;
  }

  public updateBaseWChunk(size: number):void{
    this.PropSettings.baseSizeWNudgeChunk = size;
    this.updateProps();
  }

  public toggleBaseWChunk():void{
    this.ToggleBaseWChunk = !this.ToggleBaseWChunk;
  }
  
  public updateBaseWSlice(size: number):void{
    this.PropSettings.baseSizeWNudgeSlice = size;
    this.updateProps();
  }

  public toggleBaseWSlice():void{
    this.ToggleBaseWSlice = !this.ToggleBaseWSlice;
  }
  
  public updateBaseSizeH(size:BoxSizeInterface):void{
    this.PropSettings.baseSizeH = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleBaseHselector():void{
    this.ToggleBaseH = !this.ToggleBaseH;
  }

  public updateBaseHChunk(size: number):void{
    this.PropSettings.baseSizeHNudgeChunk = size;
    this.updateProps();
  }

  public toggleBaseHChunk():void{
    this.ToggleBaseHChunk = !this.ToggleBaseHChunk;
  }
  
  public updateBaseHSlice(size: number):void{
    this.PropSettings.baseSizeHNudgeSlice = size;
    this.updateProps();
  }

  public toggleBaseHSlice():void{
    this.ToggleBaseHSlice = !this.ToggleBaseHSlice;
  }

  public updateSelectorStatus(status: boolean):void{
    this.SelectorStatus = status;
  }

  public makeIntoVariable(value: BoxSizeProps):string{
    return createCssVariable(value);
  }

  private initDefaults():void{
    const props: BaseSizeProps = {
      baseSizeW: createBoxSize(
        this.DefaultSettings.baseSizeW.size,
        this.DefaultSettings.baseSizeW.scale,
        this.DefaultSettings.baseSizeW.speed
      ),
      baseSizeWNudgeChunk: this.DefaultSettings.baseSizeWNudgeChunk,
      baseSizeWNudgeSlice: this.DefaultSettings.baseSizeWNudgeSlice,
      baseSizeH: createBoxSize(
        this.DefaultSettings.baseSizeH.size,
        this.DefaultSettings.baseSizeH.scale,
        this.DefaultSettings.baseSizeH.speed
      ),
      baseSizeHNudgeChunk: this.DefaultSettings.baseSizeHNudgeChunk,
      baseSizeHNudgeSlice: this.DefaultSettings.baseSizeHNudgeSlice
    };

    this.PropSettings = props;
  }

  private updateProps():void{
    this.UpdateProps.emit(this.PropSettings);
  }

}
