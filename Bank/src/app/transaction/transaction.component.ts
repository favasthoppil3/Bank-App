import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  dummyarray: any = []
  date: any
  currentDateTime: any

  name = 'Angular ' + VERSION.major;

  constructor(private http: HttpClient, public datepipe: DatePipe) {

    this.currentDateTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');

    console.log(this.currentDateTime);

    var abc: any = JSON.parse(localStorage.getItem('currentaccno') || '')
    this.http.post('http://localhost:3000/transaction', { "accountnum": abc }).subscribe((result: any) => {
      this.dummyarray.push(result.transaction)
      console.log("transaction", this.dummyarray)
    })
  }

  ngOnInit(): void {
    this.date = new Date()
  }

}
