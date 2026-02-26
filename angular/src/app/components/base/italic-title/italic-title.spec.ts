import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalicTitle } from './italic-title';

describe('ItalicTitle', () => {
  let component: ItalicTitle;
  let fixture: ComponentFixture<ItalicTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalicTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalicTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
