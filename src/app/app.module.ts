import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FooterComponent } from './footer/footer.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionComponent } from './television/television.component';
import { MydataComponent } from './mydata/mydata.component';
import { HttpClientModule } from '@angular/common/http';
import { PantoneComponent } from './pantone/pantone.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    MobilesComponent,
    FooterComponent,
    BikesComponent,
    TelevisionComponent,
    MydataComponent,
    PantoneComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
