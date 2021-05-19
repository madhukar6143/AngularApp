import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  private mobiles:Product[]=[]

  constructor( private myObj:HttpClient) { }
  


getMobileData():Observable<Product[]>{
  return this.myObj.get<Product[]>("assets/mobiles.json")
}

}