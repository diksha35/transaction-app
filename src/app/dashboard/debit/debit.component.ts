import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from 'src/app/service/transaction.service';



@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {
 
  spendingLimit: any=this.service.setAmountLimit;
  availBalance:number=0;
  serBalance:number=0;
   debitAmount:any;
  panelOpenState = false;

  transForm1=new FormGroup(
  {
    paymentInfo:new FormControl('',Validators.required),
    amount:new FormControl(0,[Validators.required,this.spendingLimitValidator.bind(this)]),
    remark:new FormControl('',Validators.required),
     type: new FormControl('Debit'),
     status:new FormControl('Pending')
  }
 );
 transForm2=new FormGroup(
  {
    paymentInfo:new FormControl('',[Validators.required]),
    amount:new FormControl(0,[Validators.required,this.spendingLimitValidator.bind(this)]),
    remark:new FormControl('',[Validators.required]),
    type: new FormControl('Debit'),
    status:new FormControl('Pending')
    
  }
 );


  constructor( private service:TransactionService,private dialogRef:MatDialogRef<DebitComponent>) { }
  ngOnInit(): void {
    this.serBalance=this.service.balance;
  }

//Custom VAlidator function to check if debit amount is greater than spending Limit
spendingLimitValidator(control:FormControl):{[key:string]:any}{

  if(control.value>this.spendingLimit){
    return{spendingLimit : true};
  }
 
  return control.value;
}


// Transfer Via UPI
  submitData() {
    console.log(this.transForm1.value);
    this.debitAmount=this.transForm1.value.amount;
    if(this.debitAmount > this.spendingLimit){
    console.log("Debit amount cannot be greater than the spending limit.")
    }else{
    
    this.service.sendData(this.transForm1.value);
 this.dialogRef.close(
  this.transForm1.value
 );
     
 this.availBalance=this.service.balance- this.debitAmount;
this.service.balance=this.availBalance;
this.service.setAmount(this.availBalance);
}
   
  
  }

  //Transfer via Account
  addData() {
    console.log(this.transForm2.value);
      this.service.sendData(this.transForm2.value);
    this.dialogRef.close(
     this.transForm2.value
    );
    this.debitAmount=this.transForm2.value.amount;
    this.availBalance=this.service.balance - this.debitAmount;
    this.service.balance=this.availBalance;
 console.log(this.service.balance);
this.service.setAmount(this.availBalance);
  
   
  }

}
