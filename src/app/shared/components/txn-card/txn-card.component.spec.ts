import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCardComponent } from './txn-card.component';

describe('TxnCardComponent', () => {
  let component: TxnCardComponent;
  let fixture: ComponentFixture<TxnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
