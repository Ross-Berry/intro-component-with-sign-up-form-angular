import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from './member.service';
import { Member } from 'src/app/Member';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  members!: Member[];
  registerForm!: FormGroup;
  strikeThrough!: boolean;

  constructor(private fb: FormBuilder, private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.getUsers().subscribe(members => {
      this.members = members;
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
    const member = this.registerForm.value;

    if (this.preCheck(this.members, this.registerForm)) {
      alert("Member with that email already exists");
    } else {
      this.memberService.addUser(member).subscribe(member => {
        this.members.push(member);
        alert("You have subscribed to a free trial");
      }); 

      // Form Clearance
      this.registerForm.reset("firstName");
      this.registerForm.reset("lastName");
      this.registerForm.reset("email");
      this.registerForm.reset("password");
    };
  }

  preCheck(members: Member[], form: FormGroup): boolean {
    let newEmail = form.get("email")?.value;
    let exists = false;

    members.forEach(member => {
      if (member.email === newEmail) { 
        exists = true;
      }
    })
    
    return exists;
  }
}