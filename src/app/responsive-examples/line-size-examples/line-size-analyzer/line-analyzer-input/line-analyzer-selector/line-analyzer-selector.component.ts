import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizes } from '@site-types';
import { LineAnalyzerSelectorService } from './line-analyzer-selector.service';
import { DropdownAnimation } from 'src/app/layout/sidebar/link/link.component';

@Component({
  selector: 'line-analyzer-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-analyzer-selector.component.html',
  styleUrls: ['./line-analyzer-selector.component.css'],
  animations: [DropdownAnimation]
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
    this.UpdateSize.emit(size);
    this.closeSizeList();
  }

  public toggleSizeList(): void{ this.SizeActive = !this.SizeActive; }
  public closeSizeList():void{ this.SizeActive = false; }

}
