import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.reg.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    accountnumber: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    minbalance: ['', [Validators.required]]
  })

  constructor(private data: DatabaseService, private route: Router, private reg: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    console.log("Registerform", this.registerForm)
    var uname: any = this.registerForm.value.username
    var accno: any = this.registerForm.value.accountnumber
    var password: any = this.registerForm.value.password
    var minbal: any = this.registerForm.value.minbalance
    if (this.registerForm.valid) {

      this.data.register(accno, uname, password, minbal)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.route.navigateByUrl('login')
          }
        }, (result) => {
          alert(result.error.message)
        }
        )

    } else {
      alert("failed")
    }
  }

}
