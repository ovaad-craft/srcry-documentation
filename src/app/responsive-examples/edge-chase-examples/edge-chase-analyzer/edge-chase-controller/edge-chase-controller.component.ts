import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseControllerService } from './edge-chase-controller.service';

@Component({
  selector: 'edge-chase-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edge-chase-controller.component.html',
  styleUrls: ['./edge-chase-controller.component.css']
})
export class EdgeChaseControllerComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() BrodcastName!: string;
  @Input() ChannelName!: string;
  @Input() TargetName!: string;

  constructor(private dataService: EdgeChaseControllerService){}

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }
}
