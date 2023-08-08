import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestExampleComponent } from 'src/app/responsive-examples/test-example/test-example.component';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-example-page',
  standalone: true,
  imports: [CommonModule, TestExampleComponent],
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.css']
})
export class ExamplePageComponent implements OnInit{


  constructor(private navService: SidebarService){}

  ngOnInit(): void {
      this.navService.setPageType(false);
  }
}
