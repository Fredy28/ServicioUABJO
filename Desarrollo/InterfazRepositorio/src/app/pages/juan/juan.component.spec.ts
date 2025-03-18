import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuanComponent } from './juan.component';

describe('JuanComponent', () => {
  let component: JuanComponent;
  let fixture: ComponentFixture<JuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
