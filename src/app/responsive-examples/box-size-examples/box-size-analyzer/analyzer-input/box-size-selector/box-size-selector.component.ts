import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizePropData, BoxSizeInterface, BoxSizeScale, BoxSizeSize, BoxSizeSpeed } from '@site-types';
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

  @Input() DefaultSettings?: BoxSizeInterface;
  @Output() UpdateSelection : EventEmitter<BoxSizeInterface> = new EventEmitter<BoxSizeInterface>();
  @Output() UpdateStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

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

      if(this.DefaultSettings){
        this.SelectedSize = this.DefaultSettings.size;
        this.SelectedScale = this.DefaultSettings.scale;
        this.SelectedSpeed = this.DefaultSettings.speed;
      }

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
      this.UpdateStatus.emit(false);
    }
    else{
      this.ActiveSelector = selector;
      if(selector === 'size'){ this.SizeToggle = true; }
      if(selector === 'scale'){ this.ScaleToggle = true; }
      if(selector === 'speed'){ this.SpeedToggle = true; }
      this.UpdateStatus.emit(true);
    }

  }

  public updateSize(size: BoxSizeSize):void{
    this.SelectedSize = size;
    this.ActiveSelector = 'none';
    this.SizeToggle = false;
    this.updateSelection();
  }
  
  public updateScale(scale: BoxSizeScale):void{
    this.SelectedScale = scale;
    this.ActiveSelector = 'none';
    this.ScaleToggle = false;
    this.updateSelection();
  }
  
  public updateSpeed(speed: BoxSizeSpeed):void{
    this.SelectedSpeed = speed;
    this.ActiveSelector = 'none';
    this.SpeedToggle = false;
    this.updateSelection();
  }

  private updateSelection(): void{
    this.UpdateSelection.emit({
      size: this.SelectedSize,
      scale: this.SelectedScale,
      speed: this.SelectedSpeed
    });

    this.UpdateStatus.emit(false);
  }

}
