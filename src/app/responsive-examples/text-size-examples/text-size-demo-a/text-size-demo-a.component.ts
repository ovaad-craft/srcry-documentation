import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-size-demo-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-size-demo-a.component.html',
  styleUrls: ['./text-size-demo-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextSizeDemoAComponent {

}
