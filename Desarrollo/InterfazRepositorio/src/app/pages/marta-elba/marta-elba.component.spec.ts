import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartaElbaComponent } from './marta-elba.component';

describe('MartaElbaComponent', () => {
  let component: MartaElbaComponent;
  let fixture: ComponentFixture<MartaElbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MartaElbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MartaElbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
