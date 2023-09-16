import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-size-example-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-size-example-b.component.html',
  styleUrls: ['./base-size-example-b.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleBComponent {

}
