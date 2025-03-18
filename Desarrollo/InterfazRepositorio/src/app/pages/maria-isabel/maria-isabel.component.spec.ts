import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaIsabelComponent } from './maria-isabel.component';

describe('MariaIsabelComponent', () => {
  let component: MariaIsabelComponent;
  let fixture: ComponentFixture<MariaIsabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MariaIsabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariaIsabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
