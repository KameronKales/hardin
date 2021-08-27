import { Component, OnInit } from '@angular/core';
import { FieldType, DataField } from '@holdequity/hardin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-example';

  ngOnInit() {
    console.log({ FieldType });
    console.log('DataField', DataField);
  }
}
