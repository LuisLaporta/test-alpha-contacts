import { Routes } from '@angular/router';
import { RegistrationContacts } from './pages/registration-contacts/registration-contacts';

export const routes: Routes = [
  { path: '', redirectTo: '/registration-contacts', pathMatch: 'full' },
  { path: 'registration-contacts', component: RegistrationContacts },
];
