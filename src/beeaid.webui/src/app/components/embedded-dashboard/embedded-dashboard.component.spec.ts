import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedDashboardComponent } from './embedded-dashboard.component';

describe('EmbeddedDashboardComponent', () => {
  let component: EmbeddedDashboardComponent;
  let fixture: ComponentFixture<EmbeddedDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
