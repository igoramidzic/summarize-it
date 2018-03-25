import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSubmissionComponent } from './text-submission.component';

describe('TextSubmissionComponent', () => {
  let component: TextSubmissionComponent;
  let fixture: ComponentFixture<TextSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
