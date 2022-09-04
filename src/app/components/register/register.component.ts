import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users!: User[];
  registerForm!: FormGroup;
  strikeThrough!: boolean;
  error: boolean = false;
  message: string = "";
  showMessage: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })

    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{8,}$/)]] // Minimum 8 characters or numbers
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
    const user = this.registerForm.value;

    if (this.preCheck(this.users, this.registerForm)) {
      // alert("Member with that email already exists");
      this.error = true;
      this.message = "Member with that email already exists!";
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    } else {
      this.userService.addUser(user).subscribe(user => {
        this.users.push(user);
        // alert("You have subscribed to a free trial");
        this.error = false;
        this.message = "You have subscribed to a free trial!";
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
      }); 

      // Form Clearance
      this.registerForm.reset("firstName");
      this.registerForm.reset("lastName");
      this.registerForm.reset("email");
      this.registerForm.reset("password");
    };
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