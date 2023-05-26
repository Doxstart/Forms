import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formData = {
    email: "comestai@cacchio.it",
    password: "cavolo",
    newsletter: true
  }

  title = 'angular-forms';
}
