import { Component, OnInit, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demonstration-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demonstration-frame.component.html',
  styleUrls: ['./demonstration-frame.component.css']
})
export class DemonstrationFrameComponent implements OnInit{

  @Input() Demonstration!: Type<Component>;
  @Input() BroadcastName: string = '';
  @Input() ChannelName: string = '';
  @Input() WindowWidth: string = '';
  @Input() WindowHeight: string = '';
  @Input() ShowDimensions!: boolean;

  FirefoxBrowser!: boolean;


  ngOnInit(): void {
      this.checkIfFirefox();
  }

  private checkIfFirefox():void{
    if(navigator.userAgent.indexOf('Firefox') !== -1){ this.FirefoxBrowser = true; }
    else{ this.FirefoxBrowser = false; }
  }

}
