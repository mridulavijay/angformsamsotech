import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
login=new FormGroup({
  email:new FormControl('',[Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$'),Validators.required]),
  password:new FormControl('')
})
get formstatus(){
  return this.login['controls'];
}
display(){
  console.log(this.login.value)
  alert('This form submitted')
}
}
