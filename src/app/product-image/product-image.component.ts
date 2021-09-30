import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template:`<img [src]="product?.imageUrl">`,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product|undefined;
  @HostBinding('attr.class') cssClass = 'ui small image'
  constructor() { }

  ngOnInit(): void {
  }

}
