import { Component } from '@angular/core';
import { ReadBtn } from '../../buttons/read-btn/read-btn';
import { Logo } from '../../misc/logo/logo';
import { SearchField } from '../../fields/search-field/search-field';

@Component({
  selector: 'app-bar',
  imports: [
    SearchField,
    Logo,
    ReadBtn
  ],
  templateUrl: './app-bar.html',
  styleUrl: './app-bar.scss',
})
export class AppBar {

}
