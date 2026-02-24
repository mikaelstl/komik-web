import { Routes } from '@angular/router';
import { LibraryPage } from '../pages/library/library';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
  {
    path: 'library',
    component: LibraryPage
  }
];
