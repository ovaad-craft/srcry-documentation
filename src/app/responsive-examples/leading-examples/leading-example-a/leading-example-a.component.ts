import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leading-example-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leading-example-a.component.html',
  styleUrls: ['./leading-example-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LeadingExampleAComponent {

}
