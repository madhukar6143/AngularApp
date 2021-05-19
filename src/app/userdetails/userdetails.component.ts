import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserdetailsService } from '../userdetails.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit,OnDestroy {
 
  users;
  mysub:Subscription;
  constructor(private myObj:UserdetailsService) { }

  ngOnInit():void{

    

   this.mysub = this.myObj.getUserData().subscribe(
      data=>
      {
        this.users=data
        console.log(this.users)
      },
      err=>
      {
        console.log(err)
      }

    )
  }
  ngOnDestroy(){
    this.mysub.unsubscribe();
  }
}
