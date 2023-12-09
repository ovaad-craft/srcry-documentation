import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeInterface, LineSizes, TextSizeInterface } from '@site-types';

@Component({
  selector: 'prop-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prop-display.component.html',
  styleUrls: ['./prop-display.component.css']
})
export class PropDisplayComponent {

  @Input() DefaultCategory? : string;
  @Input() BoxSizeProps?    : BoxSizeInterface;
  @Input() TextSizeProps?   : TextSizeInterface;
  @Input() LineSizeProp?    : LineSizes;



  public shapeProp():string{
    let size : string = '';

    if(this.BoxSizeProps !== undefined){
      size = `${this.BoxSizeProps.size}-${this.BoxSizeProps.scale}-${this.BoxSizeProps.speed}`;
    }
    if(this.TextSizeProps !== undefined){
      size = `text-${this.TextSizeProps.size}-${this.TextSizeProps.speed}`;
    }
    if(this.LineSizeProp !== undefined){
      size = `line-${this.LineSizeProp}`;
    }
    return size;
  }

}
