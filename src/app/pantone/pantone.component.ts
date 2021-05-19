import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PantoneService } from '../pantone.service';

@Component({
  selector: 'app-pantone',
  templateUrl: './pantone.component.html',
  styleUrls: ['./pantone.component.css']
})
export class PantoneComponent implements OnInit {
  
  mydata;

  constructor(private serviceObject:PantoneService) { }

  ngOnInit(){
 
    this.serviceObject.getDataFromServer().subscribe(
      data=>
      {
        this.mydata=data;
        console.log(data)
      },
      err=>
      {
        console.log(err)
      }
    )
    
    }
}
