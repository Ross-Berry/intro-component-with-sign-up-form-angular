import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users!: User[];
  registerForm!: FormGroup;
  strikeThrough!: boolean;

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.users = this.registerService.getUsers();

    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern("^[A-Za-z]{8,}$")]] // Minimum 8 characters
    })

    this.onChanges();
  }

  onChanges() {
    this.registerForm.valueChanges.subscribe(() => {
      // Form status error handling
      if (this.registerForm.status === "VALID") {
        this.strikeThrough = true;
      } else {
        this.strikeThrough = false;
      }
    })
  }

  onSubmit() {
    if (this.preCheck(this.users, this.registerForm)) {
      alert("User with that email already exists");
    } else {
      this.users.push(this.registerForm.value);
    };

    // Form Clearance
    this.registerForm.reset("firstName");
    this.registerForm.reset("lastName");
    this.registerForm.reset("email");
    this.registerForm.reset("password");
  }

  preCheck(users: User[], form: FormGroup): boolean {
    let newEmail = form.get("email")?.value;
    let exists = false;

    users.forEach(user => {
      if (user.email === newEmail) { 
        exists = true;
      }
    })
    
    return exists;
  }
}