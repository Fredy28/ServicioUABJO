import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlgaComponent } from './olga.component';

describe('OlgaComponent', () => {
  let component: OlgaComponent;
  let fixture: ComponentFixture<OlgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlgaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
