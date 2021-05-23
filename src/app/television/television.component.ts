import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit  {

 television:Product[]=[]
 constructor( private dsObj:DataService){}

 ngOnInit(){
   this.dsObj.getTelevisionDataFromdbJson().subscribe (
   data=>
   {
     this.television=data
   },
   err=>
   {
     console.log(err)
   }

 )
}
 }

