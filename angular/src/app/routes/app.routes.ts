import { Routes } from '@angular/router';
import { LibraryPage } from '../pages/library/library';
import { ReaderPage } from '../pages/reader/reader';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
  {
    path: 'library',
    component: LibraryPage
  },
  {
    path: 'reader',
    component: ReaderPage
  }
];
