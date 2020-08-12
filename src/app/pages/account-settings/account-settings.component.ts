import { Component, OnInit, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [ '#themecolors .selector { cursor: pointer; }'
  ]
})
export class AccountSettingsComponent implements OnInit {

  public themeLinks: NodeListOf<Element>;

  constructor(private settings: SettingsService) { }

  ngOnInit(): void {
    this.themeLinks = document.querySelectorAll('.selector');
    this.checkTheme();
  }

  setTheme(theme: string) {
    this.settings.theme = theme;
    this.checkTheme();
  }

  checkTheme() {
    this.themeLinks.forEach(link => {
      link.classList.remove('working');
      const theme = link.getAttribute('data-theme');
      if(theme == this.settings.theme) {
        link.classList.add('working');
      }
    });

  }

}
