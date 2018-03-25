import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TextSubmissionComponent } from './components/text-submission/text-submission.component';
import { SentimentChartComponent } from './components/sentiment-chart/sentiment-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {StatusService} from './services/status.service';
import {SummariesService} from './services/summaries.service';
import { HomeComponent } from './components/pages/home/home.component';
import { SummaryContainerComponent } from './components/summary-container/summary-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSubmissionComponent,
    SentimentChartComponent,
    NavbarComponent,
    HomeComponent,
    SummaryContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    HttpClientModule,
  ],
  providers: [StatusService, SummariesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
