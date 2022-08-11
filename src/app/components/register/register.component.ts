import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hoverState: boolean = false;

  registerForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.pattern("^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? \"]).*$"), Validators.required]] 
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //TODO - Submission
  }
}
