import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlejandroComponent } from './alejandro.component';

describe('AlejandroComponent', () => {
  let component: AlejandroComponent;
  let fixture: ComponentFixture<AlejandroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlejandroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlejandroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
