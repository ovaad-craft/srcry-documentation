import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryPropButtonComponent } from 'src/app/layout/srcry-prop-button/srcry-prop-button.component';
import { NumberInputComponent } from 'src/app/layout/number-input/number-input.component';

@Component({
  selector: 'leading-input',
  standalone: true,
  imports: [
    CommonModule,
    SrcryPropButtonComponent,
    NumberInputComponent
  ],
  templateUrl: './leading-input.component.html',
  styleUrls: ['./leading-input.component.css']
})
export class LeadingInputComponent implements OnInit {

  @Input()  DefaultSetting! : number;
  @Output() UpdateProp      : EventEmitter<number> = new EventEmitter<number>();

  PropSetting!       : number;
  PropButtonActive   : boolean = true;
  SelectorStatus     : boolean = false;
  ToggleLeadingNudge : boolean = false;

  ngOnInit() : void {
    this.PropSetting = this.DefaultSetting;
  }

  private updateSetting() : void{
    this.UpdateProp.emit(this.PropSetting);
  }

  public updatePropButton(value : boolean) : void{
    this.PropButtonActive = value;
  }

  public updateSelectorStatus(value : boolean) : void{
    this.SelectorStatus = value;
  }

  public toggleKerningNudge() : void{
    this.ToggleLeadingNudge = !this.ToggleLeadingNudge;
  }

  public updateProp(size : number) : void{
    this.PropSetting = size;
    this.updateSetting();
  }

}
