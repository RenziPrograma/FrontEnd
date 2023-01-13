import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RepresentaImgService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage2($event: any, name: string) {
    const file = $event.target.files[0]
    console.log(file);
    let nameFile: string = (`ImgRepresentativa/` + name)
    const imgRef = ref(this.storage, nameFile)
    uploadBytes(imgRef, file)
      .then(response => { this.getImages2(nameFile) })
      .catch(error => console.log(error))
  }

  getImages2(nameFile: any) {
    const imagesRef = ref(this.storage, 'ImgRepresentativa')
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          let nombre: string = "ImgRepresentativa/" + item.name
          if (nombre == nameFile) {
            //console.log("La URL es:" + this.url)
            this.url = await getDownloadURL(item);
          }
        }
        console.log("La URL representativa es:" + this.url)
      }).catch(error => console.log(error))
  }

}
