import { Component,
  ChangeDetectionStrategy, Input, Type, ChangeDetectorRef, ViewContainerRef, NgZone, ComponentRef,
  OnInit, ViewChild, AfterContentChecked, ElementRef, AfterViewInit, reflectComponentType, OnDestroy, afterRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenDimensionsComponent } from './screen-dimensions/screen-dimensions.component';
import { WindowSize } from '@site-types';
import { Observable, fromEvent, Subscription } from 'rxjs';


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
export class ResponsiveWindowComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input() Demonstration!  : Type<Component>;
  @Input() BroadcastName   : string = '';
  @Input() ChannelName     : string = '';
  @Input() TargetName      : string = '';
  @Input() WindowWidth     : string = '';
  @Input() MinWindowWidth  : string = '';
  @Input() WindowHeight    : string = '';
  @Input() MinWindowHeight : string = '';
  @Input() ShowDimensions! : boolean;

  @ViewChild('domFrame', {static: true, read: ElementRef}) DomFrame! : ElementRef;

  FirefoxBrowser!                   : boolean;
  ShowDemonstration!                : boolean;
  WindowDimensions                  : WindowSize        = {width: 0, height: 0};
  ParentWindowSize$!                 : Observable<Event>;
  private ParentWindowSubscription! : Subscription;
  ShowSuggestion!                   : boolean;

  constructor(
    private cdr   : ChangeDetectorRef,
    private vcRef : ViewContainerRef,
    private zone  : NgZone
  ){ }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.getParentWindowSize();

    const windowObserver = new ResizeObserver(() =>{
      this.zone.run(()=>{this.readDimensions()});
    });

    windowObserver.observe(this.DomFrame?.nativeElement);

    this.readDimensions();

    this.embedContent();
    
  }
  
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if(this.ParentWindowSubscription !== undefined){
      this.ParentWindowSubscription.unsubscribe();

    }
  }

  private getParentWindowSize(): void{
    const size: WindowSize = {
      width  : window.innerWidth,
      height : window.innerHeight
    }
    
    size.width >= 800 && size.height >= 500 ?
    this.ShowSuggestion = false :
    this.ShowSuggestion = true;
  }

  public embedContent(): void{
    const frame = this.DomFrame?.nativeElement.contentDocument || this.DomFrame?.nativeElement.contentWindow;

    const item : ComponentRef<any> = this.vcRef.createComponent<Component>(this.Demonstration);

    if(reflectComponentType(this.Demonstration)?.inputs.find(a=> a.propName === 'BroadcastName') !== undefined){
      item.instance.BroadcastName = this.BroadcastName;
      item.instance.ChannelName = this.ChannelName;
      item.instance.TargetName = this.TargetName;
    }

    const defaultStyles = document.createElement('style');
    const srcryLink = document.createElement('link');

    defaultStyles.innerText = `*{ padding : 0; margin : 0; box-sizing: border-box; overflow: hidden; } body{ display : grid; place-items: center; min-height: 0px; max-height: 100vh; grid-template-columns: 1fr; grid-template-rows: 1fr; background-color: hsl(var(--gray-100), 1); }`;
    
    srcryLink.rel = 'stylesheet';
    srcryLink.type = 'text/css';
    srcryLink.href = 'styles.css';

    frame.head.appendChild(defaultStyles);
    frame.head.appendChild(srcryLink);
    frame.body.appendChild(item.location.nativeElement);
  }

  private readDimensions(): void{
    this.WindowDimensions = {
      width  : Math.floor(this.DomFrame.nativeElement.offsetWidth),
      height : Math.floor(this.DomFrame.nativeElement.offsetHeight)
    };
  }
  
}
