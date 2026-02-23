import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from './components/screen/screen';
import { ComicImage } from "./components/comic-image/comic-image";
import { ComicVcard } from "./components/comic-vcard/comic-vcard";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Screen,
    ComicVcard
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('komik-angular');
}
