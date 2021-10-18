import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouraComponent } from './soura.component';

describe('SouraComponent', () => {
  let component: SouraComponent;
  let fixture: ComponentFixture<SouraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
