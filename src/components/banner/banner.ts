import { Component } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { Product } from '../../app/models/banner';
import { ItemOptions } from 'ionic-angular';

/**
 * Generated class for the BannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'banner',
  templateUrl: 'banner.html'
})
export class BannerComponent {

  banner: Product = {};

  constructor(private apiService: ApiProvider) {
  }

  ngOnInit() {
    this.apiService.getBanner().subscribe(item => {
      this.banner = item.product;
      console.log(this.banner);
    });
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  productImageLoaded() {
    var image = document.getElementsByTagName("banner")[0].querySelectorAll(".product-image img")[0];
    var imageWidth = image.clientWidth;
    var imageHeight = image.clientHeight;

    this.removeClass(image, "highImage");
    this.removeClass(image, "wideImage");

    if( imageWidth > imageHeight ) {
			this.addClass(image, "wideImage");
		} else {
			this.addClass(image, "highImage");
    }
  }

  removeClass(element: Element, className: string) {
    element.className = element.className.replace(/\bclassName\b/g, "");
  }

  addClass(element: Element, className: string) {
    var arr = element.className.split(" ");
    if (arr.indexOf(className) == -1) {
        element.className += " " + className;
    }
  } 
  
}
