import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeScale, BoxSizeSize, BoxSizeSpeed } from '@site-types';
import { BoxSizeSelectorService } from './box-size-selector.service';

@Component({
  selector: 'box-size-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-size-selector.component.html',
  styleUrls: ['./box-size-selector.component.css']
})
export class BoxSizeSelectorComponent implements OnInit {

  BoxSizeSizes!: BoxSizeSize[];
  BoxSizeScales!: BoxSizeScale[];
  BoxSizeSpeeds!: BoxSizeSpeed[];

  constructor(private dataService: BoxSizeSelectorService){}

  ngOnInit(): void {
      this.BoxSizeSizes = this.dataService.getSizes();
      this.BoxSizeScales = this.dataService.getScales();
      this.BoxSizeSpeeds = this.dataService.getSpeeds();
  }

}
