import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContctComponent } from './contact.component';

describe('ContctComponent', () => {
  let component: ContctComponent;
  let fixture: ComponentFixture<ContctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContctComponent]
    });
    fixture = TestBed.createComponent(ContctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
