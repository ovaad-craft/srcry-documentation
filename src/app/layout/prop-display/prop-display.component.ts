import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeInterface } from '@site-types';

@Component({
  selector: 'prop-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prop-display.component.html',
  styleUrls: ['./prop-display.component.css']
})
export class PropDisplayComponent {

  @Input() DefaultCategory?: string;
  @Input() Props: BoxSizeInterface = {size: 'xTiny', scale:'1', speed:'5'};



  public shapeProp():string{
    if(this.DefaultCategory !== undefined){
      return `${this.DefaultCategory}-${this.Props.size}-${this.Props.scale}-${this.Props.speed}`;
    }
    else{
      return `${this.Props.size}-${this.Props.scale}-${this.Props.speed}`;
    }
    //return `${this.DefaultCategory ! === undefined ? `${this.DefaultCategory}-` : ''}-${this.Props.size}-${this.Props.scale}-${this.Props.speed}`;
  }

}
