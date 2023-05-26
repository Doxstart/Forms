import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlFormComponent } from '../html-form/html-form.component';

@Component({
  selector: 'app-js-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './js-form.component.html',
  styleUrls: ['./js-form.component.scss']
})
export class JsFormComponent {
  submitForm(event: Event){
    event.preventDefault();

    let form = document.getElementById("registration") as HTMLFormElement;

    let formData = {
    email: (form.elements.namedItem("email") as any).value,
    password: (form.elements.namedItem("password") as any).value,
    newsletter: (form.elements.namedItem("newsletter") as any).checked
    };

    (form.elements.namedItem("email") as any).value = formData.email.toLowerCase();

    console.log(formData);

  }
}
