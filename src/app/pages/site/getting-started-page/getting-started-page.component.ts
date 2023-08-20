import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-getting-started-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './getting-started-page.component.html',
  styleUrls: ['./getting-started-page.component.css']
})
export class GettingStartedPageComponent {

}
