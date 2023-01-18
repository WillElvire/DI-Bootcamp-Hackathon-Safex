import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmChequeComponent } from './confirm-cheque.component';

describe('ConfirmChequeComponent', () => {
  let component: ConfirmChequeComponent;
  let fixture: ComponentFixture<ConfirmChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmChequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
