import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18n-L10n';
  today = new Date();
  money = 1234.56;
  largeNumber = 12345678.12345678;
  smallPercent = 0.25;
  largePercent = 12.345;
}
