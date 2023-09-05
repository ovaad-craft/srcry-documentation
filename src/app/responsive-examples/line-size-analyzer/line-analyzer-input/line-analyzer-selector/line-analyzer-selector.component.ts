import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizes } from '@site-types';
import { LineAnalyzerSelectorService } from './line-analyzer-selector.service';

@Component({
  selector: 'line-analyzer-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-analyzer-selector.component.html',
  styleUrls: ['./line-analyzer-selector.component.css']
})
export class LineAnalyzerSelectorComponent implements OnInit {

  @Output() UpdateSize: EventEmitter<LineSizes> = new EventEmitter<LineSizes>();

  Sizes!: LineSizes[];
  CurrentSize: LineSizes = 'narrow';
  SizeActive: boolean = false;

  constructor(private dataService: LineAnalyzerSelectorService){}

  ngOnInit(): void {
      this.Sizes = this.dataService.getSizes();
  }

  public updateSize(size: LineSizes): void{
    this.CurrentSize = size;
    this.closeSizeList();
  }

  public openSizeList(): void{ this.SizeActive = true; }
  public closeSizeList():void{ this.SizeActive = false; }

}
