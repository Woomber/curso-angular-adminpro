import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeLink = document.querySelector('#theme');

  public set theme(value: string) {
    this.themeLink.setAttribute('href', `assets/css/colors/${ value }.css`);
    localStorage.setItem('theme', value);
  }
  public get theme(): string {
    return localStorage.getItem('theme')?? 'default-dark';
  }

  constructor() {
    this.theme = this.theme;
  }

}
