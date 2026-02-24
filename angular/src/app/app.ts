import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from './components/screen/screen';
import { ComicVcard } from "./components/cards/comic-vcard/comic-vcard";
import { SearchField } from "./components/fields/search-field/search-field";
import { Logo } from './components/misc/logo/logo';
import { ReadBtn } from './components/buttons/read-btn/read-btn';
import { AppBar } from "./components/toolbars/app-bar/app-bar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Screen,
    ComicVcard,
    AppBar
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('komik-angular');
}
