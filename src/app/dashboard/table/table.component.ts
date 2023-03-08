import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from 'src/app/service/transaction.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

status:string="pending";
arr:any=[];
sub=new Subscription();

  constructor(private service:TransactionService) { }

  ngOnInit(): void {

    this.sub = this.service.subject1.subscribe((d:any)=>{
      this.arr.push(d);  
      setTimeout(() => {
        this.arr.forEach((item:any) => {
          item.status = 'Done';
        });
      }, 3000);
      }
        );
    
      
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
   }

}

