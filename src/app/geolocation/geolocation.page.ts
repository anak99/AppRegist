import { Component, OnInit } from '@angular/core';
import{Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  lat;
  lng;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }
  whereIam(){
    this.geolocation.getCurrentPosition({
      timeout:10000,
      enableHighAccuracy: true
    })
    .then ((res)=>{
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
    }).catch((e)=>{
      console.log(e);
    });

  }
}
