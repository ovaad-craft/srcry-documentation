import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeInterface, BoxSizeProps, EdgeChaseData, EdgeChaseProps } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { BoxSizeSelectorComponent } from 'src/app/responsive-examples/box-size-examples/box-size-analyzer/analyzer-input/box-size-selector/box-size-selector.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Component({
  selector: 'edge-chase-input',
  standalone: true,
  imports: [
    CommonModule,
    BoxSizeSelectorComponent,
    NumberInputComponent,
    SrcryPropButtonComponent
  ],
  templateUrl: './edge-chase-input.component.html',
  styleUrls: ['./edge-chase-input.component.css']
})
export class EdgeChaseInputComponent implements OnInit {

  @Input()  DefaultSettings! : EdgeChaseData;
  @Output() UpdateProps      : EventEmitter<EdgeChaseProps> = new EventEmitter<EdgeChaseProps>();

  PropSettings! : EdgeChaseProps;

  SelectorStatus    : boolean = false;
  PropButtonsActive : boolean = true;
  DimensionToggle   : boolean = false;

  ToggleEdgeChaseW           : boolean = false;
  ToggleEdgeChaseWNudgeChunk : boolean = false;
  ToggleEdgeChaseWNudgeSlice : boolean = false;
  ToggleEdgeChaseH           : boolean = false;
  ToggleEdgeChaseHNudgeChunk : boolean = false;
  ToggleEdgeChaseHNudgeSlice : boolean = false;
  ToggleChaseStopW           : boolean = false;
  ToggleChaseStopWNudgeChunk : boolean = false;
  ToggleChaseStopWNudgeSlice : boolean = false;
  ToggleChaseStopH           : boolean = false;
  ToggleChaseStopHNudgeChunk : boolean = false;
  ToggleChaseStopHNudgeSlice : boolean = false;

  ngOnInit() : void {
    this.initSettings();
  }

  private initSettings() : void{
    this.PropSettings = {
      ...this.DefaultSettings,
      edgeChaseW : createBoxSize(
        this.DefaultSettings.edgeChaseW.size,
        this.DefaultSettings.edgeChaseW.scale,
        this.DefaultSettings.edgeChaseW.speed,
      ),
      edgeChaseH : createBoxSize(
        this.DefaultSettings.edgeChaseH.size,
        this.DefaultSettings.edgeChaseH.scale,
        this.DefaultSettings.edgeChaseH.speed,
      ),
      chaseStopW : createBoxSize(
        this.DefaultSettings.chaseStopW.size,
        this.DefaultSettings.chaseStopW.scale,
        this.DefaultSettings.chaseStopW.speed,
      ),
      chaseStopH : createBoxSize(
        this.DefaultSettings.chaseStopH.size,
        this.DefaultSettings.chaseStopH.scale,
        this.DefaultSettings.chaseStopH.speed,
      )
    }
  }

  public dimensionToggler(value : boolean) : void{
    this.DimensionToggle = value;
  }

  public updateSelectorStatus(value : boolean) : void{
    this.SelectorStatus = value;
  }

  private updateProps() : void{
    this.UpdateProps.emit(this.PropSettings);
  }

  public updatePropButtons(value : boolean) : void{
    this.PropButtonsActive = value;
  }

  public makeIntoVariable(value : BoxSizeProps) : string{
    return createCssVariable(value);
  }

  public toggleEdgeChaseW() : void{
    this.ToggleEdgeChaseW = !this.ToggleEdgeChaseW;
  }
  public updateEdgeChaseW(size : BoxSizeInterface) : void{
    this.PropSettings.edgeChaseW = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleEdgeChaseWNudgeChunk() : void{
    this.ToggleEdgeChaseWNudgeChunk = !this.ToggleEdgeChaseWNudgeChunk;
  }
  public updateEdgeChaseWNudgeChunk(size : number) :void{
    this.PropSettings.edgeChaseWNudgeChunk = size;
    this.updateProps();
  }
  
  public toggleEdgeChaseWNudgeSlice(): void{
    this.ToggleEdgeChaseWNudgeSlice = !this.ToggleEdgeChaseWNudgeSlice;
  }
  public updateEdgeChaseWNudgeSlice(size : number) : void{
    this.PropSettings.edgeChaseWNudgeSlice = size;
    this.updateProps();
  }
  
  public toggleChaseStopW() : void{
    this.ToggleChaseStopW = !this.ToggleChaseStopW;
  }
  public updateChaseStopW(size : BoxSizeInterface) : void{
    this.PropSettings.chaseStopW = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleChaseStopWNudgeChunk() : void{
    this.ToggleChaseStopWNudgeChunk = !this.ToggleChaseStopWNudgeChunk;
  }
  public updateChaseStopWNudgeChunk(size : number) : void{
    this.PropSettings.chaseStopWNudgeChunk = size;
    this.updateProps();
  }
  
  public toggleChaseStopWNudgeSlice() : void{
    this.ToggleChaseStopWNudgeSlice = !this.ToggleChaseStopWNudgeSlice;
  }
  public updateChaseStopWNudgeSlice(size : number) : void{
    this.PropSettings.chaseStopWNudgeSlice = size;
    this.updateProps();
  }
  
  public toggleEdgeChaseH() : void{
    this.ToggleEdgeChaseH = !this.ToggleEdgeChaseH;
  }
  public updateEdgeChaseH(size : BoxSizeInterface) : void{
    this.PropSettings.edgeChaseH = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleEdgeChaseHNudgeChunk() : void{
    this.ToggleEdgeChaseHNudgeChunk = !this.ToggleEdgeChaseHNudgeChunk;
  }
  public updateEdgeChaseHNudgeChunk(size : number) : void{
    this.PropSettings.edgeChaseHNudgeChunk = size;
    this.updateProps();
  }
  
  public toggleEdgeChaseHNudgeSlice() : void{
    this.ToggleEdgeChaseHNudgeSlice = !this.ToggleEdgeChaseHNudgeSlice;
  }
  public updateEdgeChaseHNudgeSlice(size : number) : void{
    this.PropSettings.edgeChaseHNudgeSlice = size;
    this.updateProps();
  }
  
  public toggleChaseStopH() : void{
    this.ToggleChaseStopH = !this.ToggleChaseStopH;
  }
  public updateChaseStopH(size : BoxSizeInterface) : void{
    this.PropSettings.chaseStopH = createBoxSize(size.size, size.scale, size.speed);
    this.updateProps();
  }

  public toggleChaseStopHNudgeChunk() : void{
    this.ToggleChaseStopHNudgeChunk = !this.ToggleChaseStopHNudgeChunk;
  }
  public updateChaseStopHNudgeChunk(size : number) : void{
    this.PropSettings.chaseStopHNudgeChunk = size;
    this.updateProps();
  }
  
  public toggleChaseStopHNudgeSlice() : void{
    this.ToggleChaseStopHNudgeSlice = !this.ToggleChaseStopHNudgeSlice;
  }
  public updateChaseStopHNudgeSlice(size : number) : void{
    this.PropSettings.chaseStopHNudgeSlice = size;
    this.updateProps();
  }

}
