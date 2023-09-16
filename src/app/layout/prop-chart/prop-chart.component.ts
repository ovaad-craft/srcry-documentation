import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropChartData } from '@site-types';

@Component({
  selector: 'prop-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prop-chart.component.html',
  styleUrls: ['./prop-chart.component.css']
})
export class PropChartComponent {

  @Input() ChartData!: PropChartData[];

}
