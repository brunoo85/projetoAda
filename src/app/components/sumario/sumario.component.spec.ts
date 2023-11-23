import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarioComponent } from './sumario.component';

describe('SumarioComponent', () => {
  let component: SumarioComponent;
  let fixture: ComponentFixture<SumarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumarioComponent]
    });
    fixture = TestBed.createComponent(SumarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
