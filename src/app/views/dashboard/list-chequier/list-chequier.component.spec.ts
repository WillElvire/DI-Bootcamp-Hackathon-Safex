import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChequierComponent } from './list-chequier.component';

describe('ListChequierComponent', () => {
  let component: ListChequierComponent;
  let fixture: ComponentFixture<ListChequierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChequierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChequierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
