import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TelevisionService } from '../television.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit  {

 television:Product[]=[]
 constructor(private dsObj:TelevisionService){}

 ngOnInit(){
   this.television=(this.dsObj.getTelevisionData())
 }
}
