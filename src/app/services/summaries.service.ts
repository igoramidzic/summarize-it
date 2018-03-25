import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {StatusService} from './status.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SummariesService {

  summary: string = null;
  processedData: ProcessedData;
  saved: boolean = false;
  numOfSentences = 3;

  constructor(private afs: AngularFirestore,
              private statusService: StatusService,
              private http: HttpClient) { }

  saveToFirestore () {
    this.afs.collection('summary').add(this.processedData)
      .then(() => {
        this.saved = true;
        this.statusService.setStatusOnline();
      })
      .catch(() => {
        this.saved = false;
        this.statusService.setStatusOffline();
      });
  }

  getProcessedData (full_text, numOfSentences) {
    this.statusService.setStatusSummarizing();

    return this.http.post('http://127.0.0.1:5000/summary', {
      "full_text": full_text,
      "num_of_sentences": numOfSentences
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .subscribe((result: Result) => {
        this.processedData = {
          full_text: full_text,
          summary: result.summary,
          sentiment_value: result.sentiment_value,
          readTimeLength: null,
          date: new Date()
        };
        this.findReadTimeLength();
        this.statusService.setStatusOnline();
      })
  }

  findReadTimeLength () {
    let articleLength = this.processedData.full_text.split(' ').length;
    let wordSpeed = 0.3;
    let readTimeLength = Math.ceil(wordSpeed * articleLength);
    this.processedData.readTimeLength = readTimeLength;
  }

}

interface ProcessedData {
  full_text: string;
  summary: string;
  sentiment_value: string;
  readTimeLength: number;
  date: Date;
};

interface Result {
  summary: string;
  sentiment_value: string;
}
