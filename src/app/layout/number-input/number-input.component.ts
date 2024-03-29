import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'number-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  @Input()  DefaultSetting : number = 0;
  @Output() UpdateSize      : EventEmitter<number> = new EventEmitter<number>();
  
  Value : number = 0;

  ngOnInit(): void {
      if(this.DefaultSetting !== 0){
        this.Value = this.DefaultSetting;
      }
  }

  public incramentUp():void{
    this.Value++;
    this.updateSize();
  }

  public incramentDown():void{
    this.Value--;
    this.updateSize();
  }

  public updateValue(event: any): void{
    if(!event.target.value){ this.Value = 0; }
    else{ this.Value = event.target.value; }
    this.updateSize();
  }

  private updateSize():void{
    this.UpdateSize.emit(this.Value);
  }
}
