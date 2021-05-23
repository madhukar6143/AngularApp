import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { FakeDatatype } from './models/outsideData.model';
import { Product } from './models/product.model' ;
import { MyDataType } from './models/dbUsers.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private Obj:HttpClient) { }
   
  
  getDataFromOutside():Observable<FakeDatatype[]>
  {
    return this.Obj.get<FakeDatatype[]>('https://jsonplaceholder.typicode.com/posts')
  }


  getUserData():Observable<any>
  {
    return this.Obj.get<any>("https://jsonplaceholder.typicode.com/users")
 
   }

// get television data from db.json server using httpclient
     getTelevisionDataFromdbJson():Observable<any>
   {
    return this.Obj.get<any>("http://localhost:3000/television")
   }

//get  mobiles data from db.json server using httpclient
    getMobileData():Observable<Product[]>
   {
   return this.Obj.get<Product[]>('http://localhost:3000/mobiles')
   }


   getBikeData():Observable<Product[] >
   {
     return this.Obj.get< Product[]>("http://localhost:3000/bikes")
   }

//get users data from db.json server using http
   getDataFromJson():Observable< MyDataType[]>{
    return this.Obj.get<MyDataType[]>('http://localhost:3000/dbusers')
   }

   
//get users based on id  data from db.json server using httpclient
   getPostById(id):Observable<MyDataType[]>{
     return this.Obj.get<MyDataType[]>('http://localhost:3000/dbusers/'+id)
   }

//pantone data from server using httpclien
   getDataFromServer():Observable<any>
   {
  return this.Obj.get<any>('https://reqres.in/api/unknown')
   }

  }

