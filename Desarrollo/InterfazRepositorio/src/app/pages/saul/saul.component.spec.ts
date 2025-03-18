import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaulComponent } from './saul.component';

describe('SaulComponent', () => {
  let component: SaulComponent;
  let fixture: ComponentFixture<SaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
