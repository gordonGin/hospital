import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeOptionsComponent } from './mode-options.component';

describe('ModeOptionsComponent', () => {
  let component: ModeOptionsComponent;
  let fixture: ComponentFixture<ModeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
