import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeInterface, TextSizeSize, TextSizeSpeed } from '@site-types';
import { TextAnalyzerSelectorService } from './text-analyzer-selector.service';
import { DropdownAnimation } from 'src/app/layout/sidebar/link/link.component';

@Component({
  selector: 'text-analyzer-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-analyzer-selector.component.html',
  styleUrls: ['./text-analyzer-selector.component.css'],
  animations: [DropdownAnimation]
})
export class TextAnalyzerSelectorComponent implements OnInit{

  @Output() UpdateSelection: EventEmitter<TextSizeInterface> = new EventEmitter<TextSizeInterface>();

  TextSizeSizes!: TextSizeSize[];
  TextSizeSpeeds!: TextSizeSpeed[];

  SelectedSize: TextSizeSize = 'title';
  SelectedSpeed: TextSizeSpeed = '1';

  SizeToggle: boolean = false;
  SpeedToggle: boolean = false;

  ActiveSelector: string = 'none';

  constructor(private sizeService: TextAnalyzerSelectorService){}

  ngOnInit(): void {
      this.TextSizeSizes = this.sizeService.getTextSizes();
      this.TextSizeSpeeds = this.sizeService.getTextSpeeds();

      this.UpdateSelection.emit({size: this.SelectedSize, speed: this.SelectedSpeed});
  }

  public updateSelector(selector: string):void{
    if(selector === this.ActiveSelector){
      
      this.ActiveSelector = 'none';
      this.SizeToggle = false;
      this.SpeedToggle = false;
    }
    else{
      this.ActiveSelector = selector;
      if(selector === 'size'){ this.SizeToggle = true; }
      if(selector === 'speed'){ this.SpeedToggle = true; }
    }

  }

  public updateSize(size: TextSizeSize):void{
    this.SelectedSize = size;
    this.ActiveSelector = 'none';
    this.SizeToggle = false;
    this.UpdateSelection.emit({
      size: this.SelectedSize,
      speed: this.SelectedSpeed
    });
  }

  public updateSpeed(speed: TextSizeSpeed):void{
    this.SelectedSpeed = speed;
    this.ActiveSelector = 'none';
    this.SpeedToggle = false;
    this.UpdateSelection.emit({
      size: this.SelectedSize,
      speed: this.SelectedSpeed
    });
  }

}
