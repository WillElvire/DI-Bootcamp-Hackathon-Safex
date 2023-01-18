import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeItemComponent } from './cheque-item.component';

describe('ChequeItemComponent', () => {
  let component: ChequeItemComponent;
  let fixture: ComponentFixture<ChequeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
