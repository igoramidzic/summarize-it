import { Component, OnInit } from '@angular/core';
import {SummariesService} from '../../services/summaries.service';

@Component({
  selector: 'app-summary-container',
  templateUrl: './summary-container.component.html',
  styleUrls: ['./summary-container.component.scss']
})
export class SummaryContainerComponent implements OnInit {

  constructor(private summariesService: SummariesService) { }

  ngOnInit() {
  }

}
