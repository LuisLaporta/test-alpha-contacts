import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOption } from './radio-option';

describe('RadioOption', () => {
  let component: RadioOption;
  let fixture: ComponentFixture<RadioOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
