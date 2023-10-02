import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseData, EdgeChaseProps } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';

@Component({
  selector: 'edge-chase-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-input.component.html',
  styleUrls: ['./edge-chase-input.component.css']
})
export class EdgeChaseInputComponent implements OnInit {

  @Input()DefaultSettings!: EdgeChaseData;
  @Output()UpdateProps: EventEmitter<EdgeChaseProps> = new EventEmitter<EdgeChaseProps>();

  PropSettings!: EdgeChaseProps;

  SelectorStatus: boolean = false;
  PropButtonsActive: boolean = true;

  ToggleEdgeChaseW: boolean = true;
  ToggleEdgeChaseWNudgeChunk: boolean = true;
  ToggleEdgeChaseWNudgeSlice: boolean = true;
  ToggleEdgeChaseH: boolean = true;
  ToggleEdgeChaseHNudgeChunk: boolean = true;
  ToggleEdgeChaseHNudgeSlice: boolean = true;
  ToggleChaseStopW: boolean = true;
  ToggleChaseStopWNudgeChunk: boolean = true;
  ToggleChaseStopWNudgeSlice: boolean = true;
  ToggleChaseStopH: boolean = true;
  ToggleChaseStopHNudgeChunk: boolean = true;
  ToggleChaseStopHNudgeSlice: boolean = true;

  ngOnInit(): void {
    this.initSettings();
  }

  private initSettings():void{
    this.PropSettings = {
      edgeChaseW: createBoxSize(
        this.DefaultSettings.edgeChaseW.size,
        this.DefaultSettings.edgeChaseW.scale,
        this.DefaultSettings.edgeChaseW.speed,
      ),
      edgeChaseWNudgeChunk: this.DefaultSettings.edgeChaseWNudgeChunk,
      edgeChaseWNudgeSlice: this.DefaultSettings.edgeChaseWNudgeSlice,
      edgeChaseH: createBoxSize(
        this.DefaultSettings.edgeChaseH.size,
        this.DefaultSettings.edgeChaseH.scale,
        this.DefaultSettings.edgeChaseH.speed,
      ),
      edgeChaseHNudgeChunk: this.DefaultSettings.edgeChaseHNudgeChunk,
      edgeChaseHNudgeSlice: this.DefaultSettings.edgeChaseHNudgeSlice,
      chaseStopW: createBoxSize(
        this.DefaultSettings.chaseStopW.size,
        this.DefaultSettings.chaseStopW.scale,
        this.DefaultSettings.chaseStopW.speed,
      ),
      chaseStopWNudgeChunk: this.DefaultSettings.chaseStopWNudgeChunk,
      chaseStopWNudgeSlice: this.DefaultSettings.chaseStopWNudgeSlice,
      chaseStopH: createBoxSize(
        this.DefaultSettings.chaseStopH.size,
        this.DefaultSettings.chaseStopH.scale,
        this.DefaultSettings.chaseStopH.speed,
      ),
      chaseStopHNudgeChunk: this.DefaultSettings.chaseStopHNudgeChunk,
      chaseStopHNudgeSlice: this.DefaultSettings.chaseStopHNudgeSlice
    }
  }

  private updateProps(): void{
    this.UpdateProps.emit(this.PropSettings);
  }

  public updatePropButtons(value: boolean): void{
    this.PropButtonsActive = value;
  }

}
