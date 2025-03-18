import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagalyComponent } from './magaly.component';

describe('MagalyComponent', () => {
  let component: MagalyComponent;
  let fixture: ComponentFixture<MagalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagalyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
