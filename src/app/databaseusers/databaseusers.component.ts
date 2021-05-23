import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-databaseusers',
  templateUrl: './databaseusers.component.html',
  styleUrls: ['./databaseusers.component.css']
})
export class DatabaseusersComponent implements OnInit {

  users:any;
  constructor(private xObj:DataService,private router:Router) { }

  
selectbyid(id)
{ 
  console.log(id)
this.router.navigateByUrl('dbuser/'+id)

}

  ngOnInit(): void {

    this.xObj.getDataFromJson().subscribe(
  
data=>
{
  this.users=data
  console.log(this.users)
},
err=>
{
  console.log("error is ",err)
}
    )
    
  }



}