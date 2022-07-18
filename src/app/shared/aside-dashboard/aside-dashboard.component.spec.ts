import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDashboardComponent } from './aside-dashboard.component';

describe('AsideDashboardComponent', () => {
  let component: AsideDashboardComponent;
  let fixture: ComponentFixture<AsideDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
