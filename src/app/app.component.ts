import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({
    login: new FormControl(null),
    password: new FormControl(null),
  });

  get login(): FormControl {
    return this.form.get('login') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
