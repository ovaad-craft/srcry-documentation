import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';
import { TextAnalyzerSelectorComponent } from '../../../text-size-analyzer/text-analyzer-input/text-analyzer-selector/text-analyzer-selector.component';
import { TextAnalyzerBData, TextAnalyzerBInterface, TextSizeInterface } from '@site-types';
import { createTextSize } from 'src/app/utils/create-text-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Component({
  selector: 'text-size-analyzer-b-input',
  standalone: true,
  imports: [
    CommonModule,
    SrcryPropButtonComponent,
    NumberInputComponent,
    TextAnalyzerSelectorComponent
  ],
  templateUrl: './text-size-analyzer-b-input.component.html',
  styleUrls: ['./text-size-analyzer-b-input.component.css']
})
export class TextSizeAnalyzerBInputComponent implements OnInit {

  @Input() DefaultSettings!: TextAnalyzerBData;
  @Output() UpdateProps: EventEmitter<TextAnalyzerBInterface> = new EventEmitter<TextAnalyzerBInterface>();

  PropSettings!: TextAnalyzerBInterface;
  PropButtonsActive: boolean = true;
  SelectorStatus: boolean = false;

  ToggleTextSize: boolean = false;
  ToggleTextNudge: boolean = false;

  ngOnInit(){
    this.PropSettings = {
      textSize: createTextSize(this.DefaultSettings.textSize.size, this.DefaultSettings.textSize.speed),
      textNudge: this.DefaultSettings.textNudge
    };

  }

  private updateSettings(): void{
    this.UpdateProps.emit(this.PropSettings);
  }

  public updatePropButtons(value: boolean): void{
    this.PropButtonsActive = value;
  }

  public updateSelectorStatus(value: boolean): void{
    this.SelectorStatus = value;
  }

  public makeIntoVariable(size: string): string{
    return `var(--${size})`;
  }
  
  public toggleTextSize(): void{
    this.ToggleTextSize = !this.ToggleTextSize;
  }

  public updateTextSize(size: TextSizeInterface):void{
    this.PropSettings.textSize = createTextSize(size.size, size.speed);
    this.updateSettings();
  }

  public toggleTextNudge():void{
    this.ToggleTextNudge = !this.ToggleTextNudge;
  }

  public updateTextNudge(size: number): void{
    this.PropSettings.textNudge = size;
    this.updateSettings();
  }

}
