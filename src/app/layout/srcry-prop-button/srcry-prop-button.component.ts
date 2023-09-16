import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'srcry-prop-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './srcry-prop-button.component.html',
  styleUrls: ['./srcry-prop-button.component.css']
})
export class SrcryPropButtonComponent {
  @Input()Prop!: string;
  @Input()Active: boolean = true;
  @Input()Value!: string | number;
  @Input() SelectorStatus!: boolean;
  @Output()SelectionToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()UpdateActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  ButtonToggle: boolean = false;

  public toggler():void{
    this.ButtonToggle = !this.ButtonToggle;
    this.SelectionToggle.emit(this.ButtonToggle);
  }

  public setToActive(): void{
    this.UpdateActive.emit(true);
  }

  public setToInnactive(): void{
    this.UpdateActive.emit(false);
  }

}
