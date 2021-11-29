import { Injectable } from '@angular/core';
import {Camera, CameraResultType,CameraSource,Photo} from '@capacitor/camera'
import{Filesystem, Directory} from '@capacitor/filesystem'
import{Storage} from '@capacitor/storage'
import {Foto} from './models/foto.interface'
import { Capacitor} from '@capacitor/core';
@Injectable({
  providedIn: 'root'
})
export class FotoService {
  public foto: Foto[] = [];

  constructor() { }

  public async addNewToGallery ()
  {
    //Proceso para tomar una foto 
    const capturedPhoto = await Camera.getPhoto ({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
  
    this.foto.unshift({
      filepath: "foto...",
      webviewPath: capturedPhoto .webPath
    });
  }
}
