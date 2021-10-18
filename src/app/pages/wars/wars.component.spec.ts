import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsComponent } from './wars.component';

describe('WarsComponent', () => {
  let component: WarsComponent;
  let fixture: ComponentFixture<WarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
