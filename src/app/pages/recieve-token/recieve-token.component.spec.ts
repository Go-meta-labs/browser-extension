import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveTokenComponent } from './recieve-token.component';

describe('RecieveTokenComponent', () => {
  let component: RecieveTokenComponent;
  let fixture: ComponentFixture<RecieveTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieveTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
