import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';



@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  url2: string = "";



  constructor(private storage: Storage) { }



  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    console.log(file);
    let nameFile: string = (`image/` + name)
    const imgRef = ref(this.storage, nameFile)
    uploadBytes(imgRef, file)
      .then(response => { this.getImages(nameFile) })
      .catch(error => console.log(error))
  }

  getImages(nameFile: any) {
    const imagesRef = ref(this.storage, 'image')
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
                   let nombre:string="image/"+item.name
          if (nombre == nameFile) {
            //console.log("La URL es:" + this.url)
            this.url = await getDownloadURL(item);
          }
        }
        console.log("La URL es:" + this.url)
      }).catch(error => console.log(error))
  }





  //OPCIÓN QUE ANDA///
  public uploadImage2($event: any, name: string) {
    const file2 = $event.target.files[0]
    console.log(file2);
    const imgRef2 = ref(this.storage, `ImgRepresentativa/` + name)
    uploadBytes(imgRef2, file2).then(response => { this.getImages2() }).catch(error => console.log(error))
  }

  //OPCIÓN QUE ANDA///

  getImages2() {
    const imagesRef2 = ref(this.storage, 'ImgRepresentativa')
    list(imagesRef2).then(async response => {
      for (let item2 of response.items) {
        this.url2 = await getDownloadURL(item2);
        console.log("La URL2 es:" + this.url2)
      }
    }).catch(error => console.log(error))
  }



}