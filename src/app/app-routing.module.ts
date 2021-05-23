import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DatabaseusersComponent } from './databaseusers/databaseusers.component';
import { DbusersdetailsComponent } from './dbusersdetails/dbusersdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MydataComponent } from './mydata/mydata.component';
import { PantoneComponent } from './pantone/pantone.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionComponent } from './television/television.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

  {path:'products',component:ProductsComponent,children:[
    {
      path:"mobiles",component:MobilesComponent
    },
    {
      path:"bikes",component:BikesComponent
    },
    {
      path:"television",component:TelevisionComponent
    },
    {
    path:"data",component:MydataComponent
    },
    {
      path:"fake",component:PantoneComponent
    },
    {
      path:"users",component:UserdetailsComponent
    },
  
    {path:'',redirectTo:'\mobiles',pathMatch:'full'}
    
  ]},

  {path:'dbuser',component:DatabaseusersComponent},

  {path:'dbuser/:id' ,component:DbusersdetailsComponent },

  {path:'contactus',component:ContactusComponent},
  
  {path:'',redirectTo:'\home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
