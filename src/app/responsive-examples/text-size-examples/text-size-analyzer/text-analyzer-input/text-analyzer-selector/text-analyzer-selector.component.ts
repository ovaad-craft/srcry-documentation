import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeInterface, TextSizeSize, TextSizeSpeed } from '@site-types';
import { TextAnalyzerSelectorService } from './text-analyzer-selector.service';
import { DropdownAnimation } from 'src/assets/animations';

@Component({
  selector: 'text-analyzer-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-analyzer-selector.component.html',
  styleUrls: ['./text-analyzer-selector.component.css'],
  animations: [DropdownAnimation]
})
export class TextAnalyzerSelectorComponent implements OnInit{

  @Input() DefaultSettings!: TextSizeInterface;

  @Output() UpdateSelection: EventEmitter<TextSizeInterface> = new EventEmitter<TextSizeInterface>();
  @Output() UpdateStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

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
      
      if(this.DefaultSettings !== undefined){
        this.SelectedSize = this.DefaultSettings.size;
        this.SelectedSpeed = this.DefaultSettings.speed;
      }
  }

  public updateSelector(selector: string):void{
    if(selector === this.ActiveSelector){
      
      this.ActiveSelector = 'none';
      this.SizeToggle = false;
      this.SpeedToggle = false;
      this.UpdateStatus.emit(false);
    }
    else{
      this.ActiveSelector = selector;
      if(selector === 'size'){ this.SizeToggle = true; }
      if(selector === 'speed'){ this.SpeedToggle = true; }
      this.UpdateStatus.emit(true);
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
    this.UpdateStatus.emit(false);
  }

  public updateSpeed(speed: TextSizeSpeed):void{
    this.SelectedSpeed = speed;
    this.ActiveSelector = 'none';
    this.SpeedToggle = false;
    this.UpdateSelection.emit({
      size: this.SelectedSize,
      speed: this.SelectedSpeed
    });
    this.UpdateStatus.emit(false);
  }

}
