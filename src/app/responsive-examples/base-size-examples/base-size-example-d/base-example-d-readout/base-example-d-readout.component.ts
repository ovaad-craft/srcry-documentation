import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeExampleDService } from '../base-size-example-d.service';
import { BaseSizeAnalyzerInterface } from '@site-types';
import { BaseExampleDReadoutService } from './base-example-d-readout.service';

@Component({
  selector: 'app-base-example-d-readout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-example-d-readout.component.html',
  styleUrls: ['./base-example-d-readout.component.css']
})
export class BaseExampleDReadoutComponent implements OnInit, OnDestroy {

  Readings!: BaseSizeAnalyzerInterface;

  constructor(private dataService: BaseExampleDReadoutService){}

  ngOnInit(): void {
      this.dataService.Readings$.subscribe(a=> this.Readings = a);
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

}
