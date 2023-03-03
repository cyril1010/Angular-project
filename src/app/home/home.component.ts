import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any;

    constructor(private serve:ProductService){}

    ngOnInit():void{
      this.serve.getproducts().subscribe((data=>{
        this.products=data;
          }))
      }

}
