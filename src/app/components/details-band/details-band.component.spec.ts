import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBandComponent } from './details-band.component';

describe('DetailsBandComponent', () => {
  let component: DetailsBandComponent;
  let fixture: ComponentFixture<DetailsBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
