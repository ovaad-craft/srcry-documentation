import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-size-demo-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-size-demo-a.component.html',
  styleUrls: ['./box-size-demo-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BoxSizeDemoAComponent {

}
