import { Injectable } from '@angular/core';
import { BoxAnalyzerPropSizes, BoxSizeInterface, BoxSizeProps } from '@site-types';
import { BehaviorSubject, Observable } from 'rxjs';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class BoxSizeAnalyzerService {

  DataChannel!: BroadcastChannel;
  ComponentChannel: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private BoxSizeValue: BehaviorSubject<BoxAnalyzerPropSizes> = new BehaviorSubject<BoxAnalyzerPropSizes>({
    core: 'var(--xTiny-1-1)',
    full: 'var(--xTiny-1-5)'
  });
  BoxSizeValue$ = this.BoxSizeValue.asObservable();

  constructor() { }

  public createDataChannel(dataChannelName: string, componentChannelName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ComponentChannel.next(componentChannelName);
  }

  public closeDataChannel():void{ this.DataChannel.close(); }

  private setSizes(newSize: BoxSizeInterface): void{
    this.BoxSizeValue.next({
      core: createCssVariable(createBoxSize(newSize.size, '1', '1')),
      full: createCssVariable(createBoxSize(newSize.size, newSize.scale, newSize.speed))
    });
  }


}
