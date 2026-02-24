import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  imports: [],
  template: `
    <img src="./logo.svg" width="86" alt="logo"/>
  `,
  styleUrl: './logo.scss',
})
export class Logo {

}
