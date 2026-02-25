import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroChevronLeftSolid, heroChevronRightSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'change-page-btns',
  imports: [NgIcon],
  providers: [
    provideIcons({
      heroChevronRightSolid,
      heroChevronLeftSolid
    })
  ],
  templateUrl: './change-page-btns.html',
  styleUrl: './change-page-btns.scss',
})
export class ChangePageBtns {

}
