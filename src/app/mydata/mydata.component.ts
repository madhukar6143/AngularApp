import { Component, OnInit, OnDestroy} from '@angular/core';
import{DataService}from '../data.service'
import { FakeDatatype } from '../models/outsideData.model';


@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit{
 
  fakedata: FakeDatatype[]=[]
  constructor( private dsObj:DataService) { }

  ngOnInit(){
    this.dsObj.getDataFromOutside().subscribe(
   data=>{
     this.fakedata=data;
     console.log(this.fakedata)
   },
   err=>
   {
     console.log("error is",err)
   }
 )
 }
 
 
  }

