import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeInterface, BoxSizeScale, BoxSizeSize, BoxSizeSpeed } from '@site-types';
import { BoxSizeSelectorService } from './box-size-selector.service';
import { DropdownAnimation } from 'src/app/layout/sidebar/link/link.component';

@Component({
  selector: 'box-size-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-size-selector.component.html',
  styleUrls: ['./box-size-selector.component.css'],
  animations: [DropdownAnimation]
})
export class BoxSizeSelectorComponent implements OnInit {

  @Output() UpdateSelection : EventEmitter<BoxSizeInterface> = new EventEmitter<BoxSizeInterface>();

  BoxSizeSizes!: BoxSizeSize[];
  BoxSizeScales!: BoxSizeScale[];
  BoxSizeSpeeds!: BoxSizeSpeed[];

  SelectedSize: BoxSizeSize = 'xTiny';
  SelectedScale: BoxSizeScale = '1';
  SelectedSpeed: BoxSizeSpeed = '5';

  SizeToggle: boolean = false;
  ScaleToggle: boolean = false;
  SpeedToggle: boolean = false;

  ActiveSelector: string = 'none';

  constructor(private dataService: BoxSizeSelectorService){}

  ngOnInit(): void {
      this.BoxSizeSizes = this.dataService.getSizes();
      this.BoxSizeScales = this.dataService.getScales();
      this.BoxSizeSpeeds = this.dataService.getSpeeds();

      this.UpdateSelection.emit({
        size: this.SelectedSize,
        scale: this.SelectedScale,
        speed: this.SelectedSpeed
      });
  }

  public updateSelector(selector: string):void{
    if(selector === this.ActiveSelector){
      
      this.ActiveSelector = 'none';
      this.SizeToggle = false;
      this.ScaleToggle = false;
      this.SpeedToggle = false;
    }
    else{
      this.ActiveSelector = selector;
      if(selector === 'size'){ this.SizeToggle = true; }
      if(selector === 'scale'){ this.ScaleToggle = true; }
      if(selector === 'speed'){ this.SpeedToggle = true; }
    }

  }

  public updateSize(size: BoxSizeSize):void{
    this.SelectedSize = size;
    this.ActiveSelector = 'none';
    this.SizeToggle = false;
    this.UpdateSelection.emit({
      size: this.SelectedSize,
      scale: this.SelectedScale,
      speed: this.SelectedSpeed
    });
  }

}
