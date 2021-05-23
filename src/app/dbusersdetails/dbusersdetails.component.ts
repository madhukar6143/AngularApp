import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import { MyDataType } from '../models/dbUsers.model';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-dbusersdetails',
  templateUrl: './dbusersdetails.component.html',
  styleUrls: ['./dbusersdetails.component.css']
})
export class DbusersdetailsComponent implements OnInit {
 details:MyDataType;
  constructor(private dbsOBj:DataService ,private ra:ActivatedRoute,private router:Router) { }
id:number;
users;

goback123()
{
  this.router.navigateByUrl('dbuser');
}
  ngOnInit(): void {

   this.id= this.ra.snapshot.params.id
   this.dbsOBj.getPostById(this.id).subscribe(
     data=>
     {this.users=data;
      console.log("yeah ",this.users);

     },
     err=>
     {
       console.log("error id ",err)
     }
   )
  }
 

}
