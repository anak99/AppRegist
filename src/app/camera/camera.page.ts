import { Component, OnInit } from '@angular/core';
import { FotoService } from '../camera/foto.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public ftoCameraService: FotoService) { }

  ngOnInit() {
  }
  addPhotoToGallery() {
    this.ftoCameraService.addNewToGallery();
  }
}
