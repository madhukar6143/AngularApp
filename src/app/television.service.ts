import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor() { }
  private  television:Product[]=[
    {
      title:"One PLus TV",
      description:"inter. Android TV. The OnePlus TV is built on the Android TV platform, bringing you the latest and most-advanced TV viewing experience. · assistant. Google .......",
      image:"https://now.tufts.edu/sites/default/files/191204_streamingservices_disneyplus_lg.jpg" 
    },
    {
      title:"Samsung",
      description:"Samsung offers LED TVs like HD TV, The Frame TV, Full HD TV, 4K UHD TV, QLED 8K TV, QLED 4K TV, Curved TV, Smart TV with latest technology.......",
      image: "https://img2.exportersindia.com/product_images/bc-full/2019/7/4799506/television-1562046727-4979894.jpeg"
    },
    {
      title:"Lifes Good",
      description:"LG TV's come with sleek style and design that make them the center of attraction of the room they are present in. With innovative features and patent technologies, .......... ",
      image: "https://www.ibef.org//uploads/blog/television_11.jpg"
    },
    {
      title:"Videocon",
      description:"inter. Android TV. The OnePlus TV is built on the Android TV platform, bringing you the latest and most-advanced TV viewing experience. · assistant. Google .......",
      image: "https://img.etimg.com/thumb/msid-69907393,width-1200,height-900,imgsize-247872,overlay-etpanache/photo.jpg" 
    },
    {
      title:"Onida",
      description:"Samsung offers LED TVs like HD TV, The Frame TV, Full HD TV, 4K UHD TV, QLED 8K TV, QLED 4K TV, Curved TV, Smart TV with latest technology.......",
      image: "https://www.collinsdictionary.com/images/full/television_160593200.jpg"
    },
    {
      title:"Panasonic",
      description:"LG TV's come with sleek style and design that make them the center of attraction of the room they are present in. With innovative features and patent technologies, .......... ",
      image:"https://i.pcmag.com/imagery/articles/00vBFf1SA2qXbDmKwirlkhT-7.1584969078.fit_lim.size_1600x900.jpg" 
    }
  ];
  getTelevisionData():Product[]{
    return this.television
  }
}
