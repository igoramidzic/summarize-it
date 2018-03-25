import { Component, OnInit } from '@angular/core';
import {StatusService} from '../../services/status.service';
import {SummariesService} from '../../services/summaries.service';

@Component({
  selector: 'app-text-submission',
  templateUrl: './text-submission.component.html',
  styleUrls: ['./text-submission.component.scss']
})
export class TextSubmissionComponent implements OnInit {

  text: string = "";

  constructor(private summariesService: SummariesService,
              public statusService: StatusService) { }

  ngOnInit() {
  }

  onSummarize () {
    if (this.text) {
      this.summariesService.getProcessedData(this.text, this.summariesService.numOfSentences);
    }
  }

}
