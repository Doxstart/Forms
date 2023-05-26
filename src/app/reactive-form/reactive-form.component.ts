import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormComponent, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  @Input()
  data = { email: "test", password: "ciao", newsletter: false }

  formGroup = new FormGroup({
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    password: new FormControl(this.data.password, [Validators.required, Validators.minLength(4)]),
    newsletter: new FormControl(this.data.newsletter),

  })

  get email() {
    return this.formGroup.get("email") as FormControl;
  }

  get password() {
    return this.formGroup.get("password") as FormControl;
  }

  get newsletter() {
    return this.formGroup.get("newsletter") as FormControl;
  }

  submitForm(){
   console.log(this.data);
  }

}
