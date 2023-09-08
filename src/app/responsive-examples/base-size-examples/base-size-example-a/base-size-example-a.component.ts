import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-size-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-example-a.component.html',
  styleUrls: ['./base-size-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleAComponent {

}
