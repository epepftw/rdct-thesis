import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: unknown): boolean {
    let isImage : boolean;
    if(value == 'image/jpeg' || value == 'image/png') {
      isImage =true;
    }
    return isImage;
  }

}
