import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templated',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './templated.component.html',
  styleUrl: './templated.component.css'
})
export class TemplatedComponent {
  User={
    email:'',
    password:''
  }
  submit(){
    console.log(this.User)
    alert('The form is submitted')
  }
}
