import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const eNative = this.HosImg.nativeElement; 
    eNative.src = '../../../assets/descarga.png'
  }

  constructor(private HosImg:ElementRef) { }

}
