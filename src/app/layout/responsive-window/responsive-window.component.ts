import { Component,
  ChangeDetectionStrategy, Input, Type, ChangeDetectorRef, ViewContainerRef, NgZone, ComponentRef,
  OnInit, ViewChild, AfterViewChecked, ElementRef, AfterViewInit, Injector, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScreenDimensionsComponent } from './screen-dimensions/screen-dimensions.component';
import { WindowSize } from '@site-types';
import { Observable, fromEvent } from 'rxjs';

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
export class ResponsiveWindowComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() Demonstration!: Type<Component>;
  @Input() PagePath: string = '';
  @Input() BroadcastName: string = '';
  @Input() ChannelName: string = '';
  @Input() WindowWidth: string = '';
  @Input() WindowHeight: string = '';
  @Input() ShowDimensions!: boolean;

  @ViewChild('domFrame', {static: true, read: ElementRef}) DomFrame! : ElementRef;

  FirefoxBrowser! : boolean;
  ShowDemonstration!: boolean;
  WindowDimensions: WindowSize = {width: 0, height: 0};
  ParentWindowSize$: Observable<Event> = fromEvent(window, 'resize');
  ShowSuggestion!: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private vcRef: ViewContainerRef,
    private zone: NgZone,
    private sanitize: DomSanitizer
  ){}

  ngOnInit(): void {
      this.checkIfFirefox();

      this.ParentWindowSize$.subscribe(()=> this.getParentWindowSize());

      const windowObserver = new ResizeObserver((window) =>{
        this.zone.run(()=>{this.readDimensions()});
      });
  
      windowObserver.observe(this.DomFrame.nativeElement);
  }

  ngAfterViewInit(): void {
    this.getParentWindowSize();

    setTimeout(()=>{
      if(!this.FirefoxBrowser){  this.embedContent(); }
    },1000);
    
    this.readDimensions();
  }

  ngAfterViewChecked(): void {
      this.cdr.detectChanges();
  }

  private getParentWindowSize(): void{
    const size: WindowSize = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    
    size.width >= 800 && size.height >= 500 ?
    this.ShowSuggestion = false :
    this.ShowSuggestion = true;
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

  private readDimensions(): void{
    this.WindowDimensions = {
      width: Math.floor(this.DomFrame.nativeElement.offsetWidth),
      height: Math.floor(this.DomFrame.nativeElement.offsetHeight)
    };
  }
  
}
