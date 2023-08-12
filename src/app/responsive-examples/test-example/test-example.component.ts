import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'test-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class TestExampleComponent{



  constructor(){}
}
