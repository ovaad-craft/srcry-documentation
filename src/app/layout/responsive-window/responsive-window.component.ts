import { Component, ChangeDetectionStrategy, Input, Type, ChangeDetectorRef, ViewContainerRef, NgZone, ComponentRef, OnInit, ViewChild, ElementRef, AfterViewInit, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScreenDimensionsComponent } from './screen-dimensions/screen-dimensions.component';

@Component({
  selector: 'responsive-window',
  standalone: true,
  imports: [
    CommonModule,
    ScreenDimensionsComponent
  ],
  templateUrl: './responsive-window.component.html',
  styleUrls: ['./responsive-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveWindowComponent implements OnInit, AfterViewInit {

  @Input() Demonstration!: Type<Component>;
  @Input() PagePath: string = '';
  @Input() BroadcastName: string = '';
  @Input() ChannelName: string = '';
  @Input() WindowWidth: string = '';
  @Input() WindowHeight: string = '';

  @ViewChild('domFrame', {static: true, read: ElementRef}) DomFrame! : ElementRef;

  FirefoxBrowser! : boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private vcRef: ViewContainerRef,
    private zone: NgZone,
    private sanitize: DomSanitizer
  ){}

  ngOnInit(): void {
      this.checkIfFirefox();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      if(!this.FirefoxBrowser){  this.embedContent(); }
    },1000);
  }

  private checkIfFirefox():void{
    if(navigator.userAgent.indexOf('Firefox') !== -1){ this.FirefoxBrowser = true; }
    else{ this.FirefoxBrowser = false; }
  }

  public embedContent(): void{
    const frame = this.DomFrame?.nativeElement.contentDocument || this.DomFrame?.nativeElement.contentWindow;

    const item : ComponentRef<any> = this.vcRef.createComponent<Component>(this.Demonstration);
    
    frame.body.appendChild(item.location.nativeElement);
  }

  public getPath(): SafeResourceUrl{
    return this.sanitize.bypassSecurityTrustResourceUrl(this.PagePath);
  }
}
