import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
constructor(){}
private bikes:Product[]=[
    {
      title:"Ducati Panigale V4 R.",
      description:"About Panigale V4 R Ducati Panigale V4 R is expected to launch in India in July 2021 in the expected price range of ₹ 52,50,000 to ₹ 53,00,000. ......",
      image:"https://wallpapercave.com/wp/wp4055430.jpg" 
    },
    {
      title:"Aprilia RSV4 1100 Factory. .",
      description:" High-end performance. Aprilia RSV4 1100 Factory boasts exceptional performance combined with a racing frame and suspension and a series o",
      image: "https://wallpapercave.com/wp/wp2546860.jpg"
    },
    {
      title:"Honda Fireblade SP. .",
      description:"CBR1000RR-R Fireblade SP · Engine Type. 999cc liquid-cooled inline-four engine with 13:1 compression · Bore And Stroke. 81mm x 48.5mm ·....... ",
      image: "https://wallpapercave.com/wp/wp5254636.jpg"
    },
    {
      title:"BMW S1000RR M Sport.",
      description:"About Panigale V4 R Ducati Panigale V4 R is expected to launch in India in July 2021 in the expected price range of ₹ 52,50,000 to ₹ 53,00,000. ......",
      image: "https://wallpapercave.com/wp/wp4655434.jpg" 
    },
    {
      title:"Suzuki GSX-R1000R.",
      description:" High-end performance. Aprilia RSV4 1100 Factory boasts exceptional performance combined with a racing frame and suspension and a series o",
      image: "https://wallpapercave.com/wp/cqyXgsd.jpg"
    },
    {
      title:"2020 MV Agusta Brutale 1000 Serie Oro.",
      description:"CBR1000RR-R Fireblade SP · Engine Type. 999cc liquid-cooled inline-four engine with 13:1 compression · Bore And Stroke. 81mm x 48.5mm ·....... ",
      image:"https://wallpapercave.com/wp/wp5019189.jpg" 
    }
  ];
getBikeData():Product[]{
  return this.bikes;
}
}
