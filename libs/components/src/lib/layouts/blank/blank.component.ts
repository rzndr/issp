import { Component } from '@angular/core';
import { CoreService } from '@issp/common/ui/services';
import { AppSettings } from '@issp/common';

@Component({
  selector: 'issp-blank',
  templateUrl: './blank.component.html',
  styleUrls: [],
})
export class BlankComponent {
  private htmlElement!: HTMLHtmlElement;

  options = this.settings.getOptions();

  constructor(private settings: CoreService) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.htmlElement = document.querySelector('html')!;
    // Initialize project theme with options
    this.receiveOptions(this.options);
  }

  receiveOptions(options: AppSettings): void {
    this.options = options;
    this.toggleDarkTheme(options);
  }

  toggleDarkTheme(options: AppSettings) {
    if (options.theme === 'dark') {
      this.htmlElement.classList.add('dark-theme');
      this.htmlElement.classList.remove('light-theme');
    } else {
      this.htmlElement.classList.remove('dark-theme');
      this.htmlElement.classList.add('light-theme');
    }
  }
}
