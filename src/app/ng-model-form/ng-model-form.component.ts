import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.scss']
})
export class NgModelFormComponent {

  @Input()
  data = { email: "test", password: "ciao", newsletter: false }

  submitForm(){
   console.log(this.data);
  }
}


