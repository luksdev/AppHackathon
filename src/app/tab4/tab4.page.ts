import { Component, OnInit, ViewChild } from '@angular/core';
import { Environment, GoogleMaps, GoogleMap, GoogleMapOptions, Marker, CameraPosition, MarkerOptions,GoogleMapsEvent } from '@ionic-native/google-maps/ngx';
import { LoadingController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild('map') mapElement: any;

  
  map: GoogleMap;
  search: string = '';

  constructor(
    private platform: Platform,
    ) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyD5cJhVqBoCIg0HhYN5Tzhe_3D-5lUQU30',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyD5cJhVqBoCIg0HhYN5Tzhe_3D-5lUQU30'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: -9.792826,
           lng: -36.095666
         },
         zoom: 18,
         tilt: 30
       },
      controls: {
        'compass': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        'indoorPicker': true,
        'zoom': false,          // android only
        'mapToolbar': true     // android only
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'orange',
      animation: 'DROP',
      position: {
        lat: -9.792826,
        lng: -36.095666
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  searchChanged(){
    console.log(this.search)
  }
}
