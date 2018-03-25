import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {StatusService} from './status.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SummariesService {

  summary: string = null;

  constructor(private afs: AngularFirestore,
              private statusService: StatusService,
              private http: HttpClient) { }

  submitNewSummaryRequest (full_text) {
    let newData = {
      full_text: full_text,
      summary: null,
      sentiment_value: null,
      date: new Date()
    };

    this.statusService.setStatusSummarizing();

    return new Promise((resolve, reject) => {
      this.afs.collection('summary').add(newData)
        .then(result => {
          let docRef = result.id;
          console.log(result);
          this.statusService.setStatusOnline();
          this.summary = 'Some dummy summary text';
          this.submitPostToPython(full_text)
            .subscribe(result => {
              // this.afs.collection('summary').doc(docRef)
              //   .update({ "sentiment_value": result.sentiment });
            });

          resolve();
        })
        .catch(() => {
          this.statusService.setStatusOffline();
          reject()
        });
    })
  }

  submitPostToPython (full_text) {
    return this.http.post('http://127.0.0.1:5000/summary', {
      "full_text": full_text
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateSentiment () {
   }

}
