import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({
    login: new FormControl<string>(''),
    password: new FormControl(null),
  });
}
