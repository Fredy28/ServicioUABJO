import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaLeticiaComponent } from './maria-leticia.component';

describe('MariaLeticiaComponent', () => {
  let component: MariaLeticiaComponent;
  let fixture: ComponentFixture<MariaLeticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MariaLeticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariaLeticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
