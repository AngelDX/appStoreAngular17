import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //img='https://picsum.photos/640/640?rs='+Math.random();
  @Input({required:true}) img: string=''; //Campo obligatorio
  @Input() price: number=0;
  @Input() title: string='';

  @Output() addToCart=new EventEmitter();

  addToCartHandler(){
    console.log('Click desde el hijo');
    this.addToCart.emit('Hola este es un mensaje desde el hijo'+this.title);
  }
}
