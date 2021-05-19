import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

bikes:Product[]=[]
constructor(private dsObj:BikesService){}
ngOnInit(){
  this.bikes=(this.dsObj.getBikeData());
}
  
}
