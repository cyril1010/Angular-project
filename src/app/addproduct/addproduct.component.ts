import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  products={
    id:'',
    pname:'',
    price:'',
    quantity:''
  }
  constructor(private serv:ProductService){}
  ngOnInit():void{

  }
  add(){
    console.log(this.products);
    this.serv.addproducts(this.products).subscribe((data=>{
      alert(`Data is posted successfully at id ${data.id}`)
    }))
  }
}
