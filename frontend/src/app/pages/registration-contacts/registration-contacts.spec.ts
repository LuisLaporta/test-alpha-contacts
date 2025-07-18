import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationContacts } from './registration-contacts';

describe('RegistrationContacts', () => {
  let component: RegistrationContacts;
  let fixture: ComponentFixture<RegistrationContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
