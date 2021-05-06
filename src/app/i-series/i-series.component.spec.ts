import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISeriesComponent } from './i-series.component';

describe('ISeriesComponent', () => {
  let component: ISeriesComponent;
  let fixture: ComponentFixture<ISeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ISeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
