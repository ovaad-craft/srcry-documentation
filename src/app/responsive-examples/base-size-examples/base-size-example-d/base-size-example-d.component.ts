import { AfterViewInit, Component, Input, ElementRef, NgZone, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeExampleDService } from './base-size-example-d.service';
import { BaseSizeAnalyzerInterface } from '@site-types';

@Component({
  selector: 'app-base-size-example-d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-example-d.component.html',
  styleUrls: ['./base-size-example-d.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleDComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()BroadcastName!: string;
  @Input()ChannelName!: string;
  @Input()TargetName!: string;

  @ViewChild('fullBox', {static: true, read: ElementRef})FullBox!: ElementRef;
  @ViewChild('baseBox', {static: true, read: ElementRef})BaseBox!: ElementRef;
  @ViewChild('chunkBox', {static: true, read: ElementRef})ChunkBox!: ElementRef;

  constructor(private zone: NgZone, private dataService: BaseSizeExampleDService){

  }
  
  ngOnInit(): void {
    this.dataService.createChannel(this.BroadcastName, this.ChannelName, this.TargetName);
  }
  
  ngAfterViewInit(): void {
    const frameListener: ResizeObserver = new ResizeObserver((element)=>{
      this.zone.run(()=>this.readElements());
    });
    
    frameListener.observe(this.FullBox.nativeElement);
    
  }

  ngOnDestroy(): void {
      this.dataService.closeChannel();
  }

  private readElements():void{
    const sizes: BaseSizeAnalyzerInterface = {
      fullWidth: this.FullBox.nativeElement.offsetWidth,
      baseWidth: this.BaseBox.nativeElement.offsetWidth,
      chunkWidth: this.ChunkBox.nativeElement.offsetWidth
    };

    this.dataService.sendData(sizes);
  }

}
