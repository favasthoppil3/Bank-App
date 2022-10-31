import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  name: any
  accountno: any
  pan: any
  adhar: any
  salary: any
  creditArray: any = []
  Creditdatabase: any = {}
  constructor() { }

  ngOnInit(): void {
  }
  credit() {
    this.Creditdatabase[this.accountno] = {
      name: this.name,
      accno: this.accountno,
      pan: this.pan,
      adhar: this.adhar,
      salary: this.salary
    }
    console.log("data", this.Creditdatabase)
    this.creditArray.push(this.Creditdatabase[this.accountno])
    console.log("dda", this.creditArray)
    this.name = ""
    this.accountno = ""
    this.pan = ""
    this.adhar = ""
    this.salary = ""

  }
}
