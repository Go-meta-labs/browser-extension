import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealRecoveryPhraseComponent } from './reveal-recovery-phrase.component';

describe('RevealRecoveryPhraseComponent', () => {
  let component: RevealRecoveryPhraseComponent;
  let fixture: ComponentFixture<RevealRecoveryPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevealRecoveryPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevealRecoveryPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
