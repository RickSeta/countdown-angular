import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaCountdownComponent } from './gerencia-countdown.component';

describe('GerenciaCountdownComponent', () => {
  let component: GerenciaCountdownComponent;
  let fixture: ComponentFixture<GerenciaCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciaCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
